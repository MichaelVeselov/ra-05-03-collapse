import { useState } from 'react';
import './collapse.css';

export default function Collapse(props) {
  const [collapsed, setCollapsed] = useState(false);

  let { collapsedLabel, expandedLabel } = props;

  if (!collapsedLabel || !expandedLabel) {
    collapsedLabel = 'Развернуть';
    expandedLabel = 'Свернуть';
  }

  const handleClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  let classNames = 'mx-auto p-3';

  if (collapsed) {
    classNames += ' collapsed';
  } else {
    classNames += ' expanded';
  }

  return (
    <div className={classNames} style={{ width: '800px' }}>
      <div className='card overflow-hidden content'>{props.children}</div>
      <button
        className='mb-3 mt-1 btn btn-primary'
        style={{ width: '200px' }}
        onClick={handleClick}
      >
        {collapsed ? collapsedLabel : expandedLabel}
      </button>
    </div>
  );
}
