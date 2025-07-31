import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.less';
import Button from '../Button';
import Icon from '../Icon';

// 判断是否图片文件
function isImageFile(file) {
  const name = file.name || '';
  const type = file.originFileObj?.type || '';
  return /image\//.test(type) || /\.(png|jpe?g|gif|bmp|webp|svg)$/i.test(name);
}

const Upload = ({
  action = '',
  headers = {},
  data: extraData = {},
  withCredentials = false,
  accept = '*',
  multiple = false,
  disabled = false,
  showUploadList = true,
  listType = 'text', // 新增
  maxCount,
  maxSize,
  fileList: propFileList,
  defaultFileList = [],
  onChange,
  onRemove,
  beforeUpload,
  className = '',
  style = {},
  children,
}) => {
  const inputRef = useRef();
  const [fileList, setFileList] = useState(propFileList || defaultFileList);
  // 预览图片大图
  const [previewUrl, setPreviewUrl] = useState(null);

  // 受控同步
  React.useEffect(() => {
    if (propFileList !== undefined) setFileList(propFileList);
  }, [propFileList]);

  // 上传文件
  const uploadFile = (fileObj) => {
    if (!action) {
      // 没有action，模拟上传
      setTimeout(() => {
        fileObj.status = 'done';
        fileObj.percent = 100;
        setFileList(list => list.map(f => f.uid === fileObj.uid ? { ...fileObj } : f));
        onChange && onChange({ file: fileObj, fileList: fileList.map(f => f.uid === fileObj.uid ? { ...fileObj } : f) });
      }, 1000 + Math.random() * 2000);
      return;
    }
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', fileObj.originFileObj);
    Object.entries(extraData).forEach(([k, v]) => formData.append(k, v));
    xhr.open('POST', action, true);
    Object.entries(headers).forEach(([k, v]) => xhr.setRequestHeader(k, v));
    xhr.withCredentials = withCredentials;
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        fileObj.status = 'uploading';
        fileObj.percent = Math.round((e.loaded / e.total) * 100);
        setFileList(list => list.map(f => f.uid === fileObj.uid ? { ...fileObj } : f));
      }
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        fileObj.status = 'done';
        fileObj.percent = 100;
      } else {
        fileObj.status = 'error';
        fileObj.percent = 0;
      }
      setFileList(list => list.map(f => f.uid === fileObj.uid ? { ...fileObj } : f));
      onChange && onChange({ file: fileObj, fileList: fileList.map(f => f.uid === fileObj.uid ? { ...fileObj } : f) });
    };
    xhr.onerror = () => {
      fileObj.status = 'error';
      fileObj.percent = 0;
      setFileList(list => list.map(f => f.uid === fileObj.uid ? { ...fileObj } : f));
      onChange && onChange({ file: fileObj, fileList: fileList.map(f => f.uid === fileObj.uid ? { ...fileObj } : f) });
    };
    xhr.send(formData);
  };

  // 校验文件类型/大小/数量
  const validateFile = (file, nextList) => {
    if (maxCount && nextList.length > maxCount) {
      onChange && onChange({ file, fileList: nextList, error: 'maxCount' });
      return false;
    }
    if (maxSize && file.size > maxSize) {
      onChange && onChange({ file, fileList: nextList, error: 'maxSize' });
      return false;
    }
    if (accept && accept !== '*' && !file.type.match(accept.replace('*', '.*'))) {
      onChange && onChange({ file, fileList: nextList, error: 'accept' });
      return false;
    }
    return true;
  };

  // 选择文件
  const handleChange = async (e) => {
    let files = Array.from(e.target.files);
    if (beforeUpload) {
      files = await Promise.all(files.map(file => beforeUpload(file) === false ? null : file));
      files = files.filter(Boolean);
    }
    let newFiles = files.map(file => ({
      uid: `${Date.now()}-${Math.random()}`,
      name: file.name,
      status: 'uploading',
      percent: 0,
      originFileObj: file,
    }));
    let nextList = multiple ? [...fileList, ...newFiles] : [...newFiles];
    // 文件校验
    newFiles = newFiles.filter(f => validateFile(f.originFileObj, nextList));
    nextList = multiple ? [...fileList, ...newFiles] : [...newFiles];
    setFileList(nextList);
    if (newFiles.length > 0) {
      onChange && onChange({ file: newFiles[0], fileList: nextList });
      newFiles.forEach(uploadFile);
    }
    inputRef.current.value = '';
  };

  // 删除文件
  const handleRemove = (file) => {
    if (onRemove && onRemove(file) === false) return;
    const nextList = fileList.filter(f => f.uid !== file.uid);
    setFileList(nextList);
    onChange && onChange({ file, fileList: nextList });
  };

  // 预览图片大图
  const handlePreview = async (file) => {
    if (!isImageFile(file)) return;
    let url = file.url;
    if (!url && file.originFileObj) {
      url = URL.createObjectURL(file.originFileObj);
    }
    setPreviewUrl(url);
  };
  const handleClosePreview = () => {
    setPreviewUrl(null);
  };

  return (
    <div className={`sui-upload ${className}`} style={style}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="sui-upload-input"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <Button
        type="primary"
        disabled={disabled}
        onClick={() => !disabled && inputRef.current && inputRef.current.click()}
        className="sui-upload-btn"
      >
        <Icon name="Upload" /> {children || '上传文件'}
      </Button>
      {showUploadList && fileList.length > 0 && (
        <ul className={`sui-upload-list sui-upload-list-${listType}`}>
          {fileList.map(file => (
            <li key={file.uid} className={`sui-upload-list-item sui-upload-list-item-${file.status}` + (listType === 'picture-card' ? ' sui-upload-list-item-card' : '')}>
              {listType === 'picture' || listType === 'picture-card' ? (
                isImageFile(file) ? (
                  <span className="sui-upload-list-item-thumb" onClick={() => handlePreview(file)}>
                    <img src={file.url || (file.originFileObj && URL.createObjectURL(file.originFileObj))} alt={file.name} />
                  </span>
                ) : (
                  <Icon name="File" />
                )
              ) : null}
              <span className="sui-upload-list-item-name">{file.name}</span>
              <a
                className="sui-upload-list-item-action sui-upload-list-item-action-download"
                href={file.url || (file.originFileObj && URL.createObjectURL(file.originFileObj))}
                download={file.name}
                target="_blank"
                rel="noopener noreferrer"
                title="下载"
                onClick={e => e.stopPropagation()}
              >
                <Icon name="Download" />
              </a>
              <span className="sui-upload-list-item-action sui-upload-list-item-action-remove" onClick={() => handleRemove(file)}>
                <Icon name="CloseOne" />
              </span>
              {file.status === 'uploading' && (
                <span className="sui-upload-list-item-progress-bar">
                  <span className="sui-upload-list-item-progress-inner" style={{ width: `${file.percent || 0}%` }} />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
      {/* 图片预览弹窗 */}
      {previewUrl && (
        <div className="sui-upload-preview-mask" onClick={handleClosePreview}>
          <div className="sui-upload-preview-modal" onClick={e => e.stopPropagation()}>
            <img src={previewUrl} alt="预览" />
            <span className="sui-upload-preview-close" onClick={handleClosePreview}><Icon name="CloseOne" /></span>
          </div>
        </div>
      )}
    </div>
  );
};

Upload.propTypes = {
  action: PropTypes.string,
  headers: PropTypes.object,
  data: PropTypes.object,
  withCredentials: PropTypes.bool,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  showUploadList: PropTypes.bool,
  listType: PropTypes.oneOf(['text', 'picture', 'picture-card']),
  maxCount: PropTypes.number,
  maxSize: PropTypes.number,
  fileList: PropTypes.array,
  defaultFileList: PropTypes.array,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  beforeUpload: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Upload; 