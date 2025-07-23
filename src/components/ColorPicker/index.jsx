import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './style.less';
import Icon from '../Icon';
import Button from '../Button';

const ColorPicker = ({
  value,
  defaultValue = '#1890ff',
  onChange,
  disabled = false,
  allowClear = true,
  className = '',
  style = {},
  size = 'middle',
  format = 'hex',
  placeholder = '请选择颜色',
  getPopupContainer,
  triggerMode = 'input', // 新增参数
}) => {
  // 状态管理
  const [color, setColor] = useState(value !== undefined ? value : defaultValue);
  const [open, setOpen] = useState(false);
  const [hsv, setHsv] = useState({ h: 0, s: 1, v: 1 }); // HSV颜色模型
  const [alpha, setAlpha] = useState(1); // 透明度值，范围0-1
  const [direction, setDirection] = useState('down');
  const [tempColor, setTempColor] = useState(null); // 临时颜色，用于确认前的预览
  const [tempHsv, setTempHsv] = useState(null); // 临时HSV值
  const [tempAlpha, setTempAlpha] = useState(null); // 临时透明度值
  
  // refs
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const hueRef = useRef(null);
  const paletteRef = useRef(null);
  const alphaRef = useRef(null);
  
  // 受控模式同步
  useEffect(() => {
    if (value !== undefined) {
      setColor(value);
      setHsvFromColor(value);
    }
  }, [value]);
  
  // 下拉方向
  useEffect(() => {
    if (open) {
      const rect = triggerRef.current?.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setDirection(rect && rect.bottom + 300 > windowHeight ? 'up' : 'down');
      
      // 打开时初始化临时值
      setTempColor(color);
      setTempHsv(hsv);
      setTempAlpha(alpha);
    }
  }, [open]);
  
  // 外部点击关闭 - 修改为不自动关闭，而是通过确定按钮关闭
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        // 点击外部区域时取消选择
        handleCancel();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);
  
  // 颜色格式转换函数
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  const rgbToHex = (r, g, b) => {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  
  const rgbToHsv = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, v = max;
    
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    
    if (max === min) {
      h = 0; // 无色调
    } else {
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    
    return { h: h * 360, s, v };
  };
  
  const hsvToRgb = (h, s, v) => {
    h /= 360;
    let r, g, b;
    
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    
    switch (i % 6) {
      case 0: r = v; g = t; b = p; break;
      case 1: r = q; g = v; b = p; break;
      case 2: r = p; g = v; b = t; break;
      case 3: r = p; g = q; b = v; break;
      case 4: r = t; g = p; b = v; break;
      case 5: r = v; g = p; b = q; break;
    }
    
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  };
  
  // 从颜色字符串设置HSV值和透明度
  const setHsvFromColor = (colorStr, setHsvFunc = setHsv, setAlphaFunc = setAlpha) => {
    if (!colorStr) return;
    
    let rgb;
    let newAlpha = 1;
    
    if (colorStr.startsWith('#')) {
      rgb = hexToRgb(colorStr);
    } else if (colorStr.startsWith('rgb')) {
      // 处理rgba格式
      if (colorStr.startsWith('rgba')) {
        const match = colorStr.match(/\d+(\.\d+)?/g);
        if (match && match.length >= 4) {
          rgb = {
            r: parseInt(match[0]),
            g: parseInt(match[1]),
            b: parseInt(match[2])
          };
          newAlpha = parseFloat(match[3]);
        }
      } else {
        const match = colorStr.match(/\d+/g);
        if (match && match.length >= 3) {
          rgb = {
            r: parseInt(match[0]),
            g: parseInt(match[1]),
            b: parseInt(match[2])
          };
        }
      }
    }
    
    if (rgb) {
      const newHsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
      setHsvFunc(newHsv);
      setAlphaFunc(newAlpha);
    }
  };
  
  // 根据HSV和透明度生成颜色值
  const getColorFromHsv = (hsvValue = tempHsv, alphaValue = tempAlpha) => {
    if (!hsvValue) return '';
    
    const { h, s, v } = hsvValue;
    const rgb = hsvToRgb(h, s, v);
    
    if (format === 'hex' && alphaValue === 1) {
      return rgbToHex(rgb.r, rgb.g, rgb.b);
    } else if (format === 'rgb' || alphaValue < 1) {
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alphaValue.toFixed(2)})`;
    }
    
    return rgbToHex(rgb.r, rgb.g, rgb.b);
  };
  
  // 处理颜色变化
  const handleColorChange = (newHsv) => {
    setTempHsv(newHsv);
    const newColor = getColorFromHsv(newHsv, tempAlpha);
    setTempColor(newColor);
  };
  
  // 处理色相变化
  const handleHueChange = (e) => {
    if (!hueRef.current) return;
    
    const rect = hueRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, offsetX / rect.width));
    
    handleColorChange({
      ...tempHsv,
      h: percent * 360
    });
  };
  
  // 处理透明度变化
  const handleAlphaChange = (e) => {
    if (!alphaRef.current) return;
    
    const rect = alphaRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newAlpha = Math.max(0, Math.min(1, offsetX / rect.width));
    
    setTempAlpha(newAlpha);
    const newColor = getColorFromHsv(tempHsv, newAlpha);
    setTempColor(newColor);
  };
  
  // 处理色板点击/拖动
  const handlePaletteChange = (e) => {
    if (!paletteRef.current) return;
    
    const rect = paletteRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    const saturation = Math.max(0, Math.min(1, offsetX / rect.width));
    const value = Math.max(0, Math.min(1, 1 - offsetY / rect.height));
    
    handleColorChange({
      ...tempHsv,
      s: saturation,
      v: value
    });
  };
  
  // 处理鼠标拖动
  const handleMouseDown = (handler) => (e) => {
    // 阻止事件冒泡，防止触发外层的点击事件导致下拉框关闭
    e.stopPropagation();
    handler(e);
    
    const handleMouseMove = (e) => {
      handler(e);
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  // 清除颜色
  const handleClear = (e) => {
    e.stopPropagation();
    setColor('');
    setTempColor('');
    if (onChange) {
      onChange('');
    }
    setOpen(false);
  };
  
  // 渲染调色板
  const renderPalette = () => {
    if (!tempHsv) return null;
    
    const { h } = tempHsv;
    const backgroundColor = `hsl(${h}, 100%, 50%)`;
    
    return (
      <div className="sui-colorpicker-palette-container">
        <div
          className="sui-colorpicker-palette"
          ref={paletteRef}
          style={{ backgroundColor }}
          onMouseDown={handleMouseDown(handlePaletteChange)}
        >
          <div className="sui-colorpicker-palette-white" />
          <div className="sui-colorpicker-palette-black" />
          <div
            className="sui-colorpicker-palette-handler"
            style={{
              left: `${tempHsv.s * 100}%`,
              top: `${(1 - tempHsv.v) * 100}%`,
              backgroundColor: tempColor
            }}
          />
        </div>
      </div>
    );
  };
  
  // 渲染色相滑块
  const renderHueSlider = () => {
    if (!tempHsv) return null;
    
    return (
      <div
        className="sui-colorpicker-hue"
        ref={hueRef}
        onMouseDown={handleMouseDown(handleHueChange)}
      >
        <div
          className="sui-colorpicker-hue-handler"
          style={{ left: `${(tempHsv.h / 360) * 100}%` }}
        />
      </div>
    );
  };
  
  // 渲染透明度滑块
  const renderAlphaSlider = () => {
    if (!tempHsv) return null;
    
    const { h, s, v } = tempHsv;
    const rgb = hsvToRgb(h, s, v);
    
    return (
      <div
        className="sui-colorpicker-alpha"
        ref={alphaRef}
        onMouseDown={handleMouseDown(handleAlphaChange)}
      >
        <div 
          className="sui-colorpicker-alpha-gradient"
          style={{ 
            background: `linear-gradient(to right, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0), rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1))` 
          }}
        />
        <div
          className="sui-colorpicker-alpha-handler"
          style={{ left: `${tempAlpha * 100}%` }}
        />
      </div>
    );
  };
  
  // 渲染预设颜色
  const presetColors = [
    '#f5222d', '#fa541c', '#fa8c16', '#faad14', '#fadb14',
    '#a0d911', '#52c41a', '#13c2c2', '#1890ff', '#2f54eb',
    '#722ed1', '#eb2f96', '#000000', '#666666', '#cccccc', '#ffffff'
  ];
  
  const renderPresetColors = () => {
    return (
      <div className="sui-colorpicker-presets">
        {presetColors.map((presetColor) => (
          <div
            key={presetColor}
            className={`sui-colorpicker-preset-color ${tempColor === presetColor ? 'active' : ''}`}
            style={{ backgroundColor: presetColor }}
            onClick={(e) => {
              // 阻止事件冒泡，防止触发外层的点击事件
              e.stopPropagation();
              setTempColor(presetColor);
              setHsvFromColor(presetColor, setTempHsv, setTempAlpha);
            }}
          />
        ))}
      </div>
    );
  };
  
  // 渲染颜色值输入
  const renderColorInput = () => {
    return (
      <div className="sui-colorpicker-input-container">
        <input
          className="sui-colorpicker-input"
          value={tempColor || ''}
          onClick={(e) => {
            // 阻止事件冒泡，防止触发外层的点击事件导致下拉框关闭
            e.stopPropagation();
          }}
          onChange={(e) => {
            const newColor = e.target.value;
            setTempColor(newColor);
            setHsvFromColor(newColor, setTempHsv, setTempAlpha);
          }}
        />
      </div>
    );
  };
  
  // 确认选择
  const handleConfirm = () => {
    // 应用临时颜色到实际颜色
    setColor(tempColor);
    setHsv(tempHsv);
    setAlpha(tempAlpha);
    
    if (onChange) {
      onChange(tempColor);
    }
    
    setOpen(false);
  };
  
  // 取消选择
  const handleCancel = () => {
    // 不应用临时颜色，直接关闭
    setOpen(false);
  };
  
  // 渲染下拉内容
  const dropdownContent = (
    <div className="sui-colorpicker-dropdown-wrap">
      <div
        className={`sui-colorpicker-dropdown sui-colorpicker-dropdown-${direction}`}
        ref={dropdownRef}
        onClick={(e) => {
          // 阻止事件冒泡，防止触发外层的点击事件导致下拉框关闭
          e.stopPropagation();
        }}
      >
        {renderPalette()}
        {renderHueSlider()}
        {renderAlphaSlider()}
        {renderPresetColors()}
        {renderColorInput()}
        <div className="sui-colorpicker-footer">
          <Button 
            type="text" 
            size="small" 
            onClick={handleCancel}
            className="sui-colorpicker-cancel-btn"
          >
            取消
          </Button>
          <Button 
            type="primary" 
            size="small" 
            onClick={handleConfirm}
            className="sui-colorpicker-ok-btn"
          >
            确定
          </Button>
        </div>
      </div>
    </div>
  );
  
  // 弹层挂载节点
  const popupContainer = getPopupContainer ? getPopupContainer(triggerRef.current) : undefined;
  
  // 判断是否显示清空按钮
  const showClear = allowClear && color;

  // 触发器渲染
  let triggerNode;
  if (triggerMode === 'input') {
    triggerNode = (
      <div className={`sui-colorpicker-selection${open ? ' sui-colorpicker-open' : ''}`}>
        <div className="sui-colorpicker-color">
          <div
            className="sui-colorpicker-color-block"
            style={{ backgroundColor: color || 'transparent' }}
          />
        </div>
        <div className="sui-colorpicker-text">
          {color || placeholder}
        </div>
        {showClear && (
          <span className="sui-colorpicker-clear" onClick={handleClear}>
            <Icon name="CloseOne" theme="filled" size={16} />
          </span>
        )}
        <span className="sui-colorpicker-arrow">
          <Icon name="Down" size={16} />
        </span>
      </div>
    );
  } else if (triggerMode === 'button') {
    triggerNode = (
      <div className="sui-colorpicker-btn-trigger" style={{ backgroundColor: color || '#1890ff' }}>
        <Icon name="Down" size={16} style={{ color: '#fff' }} />
      </div>
    );
  }

  // 主体
  const colorPickerNode = (
    <div
      className={`sui-colorpicker${disabled ? ' sui-colorpicker-disabled' : ''} ${className} sui-colorpicker-${size}${triggerMode === 'button' ? ' sui-colorpicker-btn' : ''}`}
      style={style}
      ref={triggerRef}
      tabIndex={disabled ? -1 : 0}
      onClick={() => {
        if (!disabled) {
          setOpen(v => !v);
        }
      }}
    >
      {triggerNode}
      {open && (popupContainer
        ? ReactDOM.createPortal(dropdownContent, popupContainer)
        : dropdownContent
      )}
    </div>
  );
  
  return colorPickerNode;
};

ColorPicker.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  allowClear: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  format: PropTypes.oneOf(['hex', 'rgb']),
  placeholder: PropTypes.string,
  getPopupContainer: PropTypes.func,
  triggerMode: PropTypes.oneOf(['input', 'button']), // 新增
};

export default ColorPicker;