import React, { useEffect, useState } from 'react';
import './index.css';

function ProgressBar({ value = 0 }) {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className='progress'>
      <span style={{ color: percentage > 49 ? 'white' : 'black' }}>
        {percentage.toFixed()} %
      </span>
      <div
        style={{ width: `${percentage}%` }}
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage.toFixed()}
      ></div>
    </div>
  );
}

export default ProgressBar;
