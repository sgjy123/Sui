import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'components';
import './style.less';

const DocIndex = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 处理侧边栏菜单点击事件
  const handleMenuSelect = (key) => {
    navigate(key);
  };

  // 顶部导航菜单数据
  const topMenuItems = [
    { key: '/public', label: '首页' },
    { key: '/doc', label: '组件' },
    { key: '/guide', label: '指南' }
  ];

  // 侧边栏菜单数据
  const sideMenuItems = [
    { key: '/doc/button', label: 'Button 按钮' },
    { key: '/doc/icon', label: 'Icon 图标' },
    { key: '/doc/divider', label: 'Divider 分割线' },
    { key: '/doc/timeline', label: 'Timeline 时间轴' },
    { key: '/doc/tooltip', label: 'Tooltip 文字提示' },
    { key: '/doc/menu', label: 'Menu 导航菜单' },
    { key: '/doc/space', label: 'Space 间距' },
    { key: '/doc/grid', label: 'Grid 栅格' },
    { key: '/doc/empty', label: 'Empty 空状态' },
    { key: '/doc/breadcrumb', label: 'Breadcrumb 面包屑' },
    { key: '/doc/tag', label: 'Tag 标签' },
    { key: '/doc/message', label: 'Message 全局提示' },
    { key: '/doc/alert', label: 'Alert 警告提示' },
    { key: '/doc/drawer', label: 'Drawer 抽屉' },
    { key: '/doc/affix', label: 'Affix 固钉' },
    { key: '/doc/card', label: 'Card 卡片' },
    { key: '/doc/loading', label: 'Loading 加载中' },
    { key: '/doc/backtop', label: 'BackTop 回到顶部' },
    { key: '/doc/anchor', label: 'Anchor 锚点' },
    { key: '/doc/steps', label: 'Steps 步骤条' },
    { key: '/doc/modal', label: 'Modal 模态框' },
    { key: '/doc/messagebox', label: 'MessageBox 消息提示框' },
    { key: '/doc/notification', label: 'Notification 通知' },
    { key: '/doc/avatar', label: 'Avatar 头像' },
    { key: '/doc/badge', label: 'Badge 徽标' },
    { key: '/doc/dropdown', label: 'Dropdown 下拉菜单' },
    { key: '/doc/collapse', label: 'Collapse 折叠面板' },
    { key: '/doc/progress', label: 'Progress 进度条' },
    { key: '/doc/pageheader', label: 'PageHeader 页头' },
    { key: '/doc/pagination', label: 'Pagination 分页' }, 
    { key: '/doc/input', label: 'Input 输入框' },
    { key: '/doc/select', label: 'Select 下拉框' },
    { key: '/doc/radio', label: 'Radio 单选框' },
    { key: '/doc/checkbox', label: 'Checkbox 多选框' },
    { key: '/doc/inputnumber', label: 'InputNumber 数字输入框' },
    { key: '/doc/rate', label: 'Rate 评分' },
    { key: '/doc/switch', label: 'Switch 开关' },
    { key: '/doc/slider', label: 'Slider 滑块' },
    { key: '/doc/cascader', label: 'Cascader 级联选择器' },
    { key: '/doc/datepicker', label: 'DatePicker 日期选择框' },
    { key: '/doc/timepicker', label: 'TimePicker 时间选择框' },
    { key: '/doc/colorpicker', label: 'ColorPicker 颜色选择器' },
    { key: '/doc/transfer', label: 'Transfer 穿梭框' },
    { key: '/doc/upload', label: 'Upload 上传' },
    { key: '/doc/treeSelect', label: 'TreeSelect 树选择器' },
    { key: '/doc/table', label: 'Table 表格' },
    { key: '/doc/carousel', label: 'Carousel 走马灯' },
    { key: '/doc/calendar', label: 'Calendar 日历' },
    { key: '/doc/tree', label: 'Tree 树' },
    { key: '/doc/image', label: 'Image 图片' },
    { key: '/doc/formDescriptions', label: 'FormDescriptions 表单描述' },
  ];

  return (
    <div className="doc-layout">
      <header className="doc-header">
        <div className="logo">
          <h1>Sui Design</h1>
        </div>
        <Menu mode="horizontal" showBorder={false} selectedKeys={[location.pathname]} onSelect={handleMenuSelect}>
          {topMenuItems.map(item => (
            <Menu.Item key={item.key} index={item.key}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </header>

      <div className="doc-container">
        <aside className="doc-sidebar">
          <div className="menu-group">
            <h3>通用</h3>
            <Menu 
              mode="vertical" 
              selectedKeys={[location.pathname]}
              onSelect={handleMenuSelect}
            >
              {sideMenuItems.map(item => (
                <Menu.Item key={item.key} index={item.key}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </aside>

        <main className="doc-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DocIndex;
