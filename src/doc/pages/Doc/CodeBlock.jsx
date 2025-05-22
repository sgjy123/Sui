import React from 'react';
import './style.less';

const CodeBlock = ({ children }) => {
  return (
    <div className="code-block">
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock; 