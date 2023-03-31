import React from 'react';
import MetricsList from './MetricsList';

const Metrics = (props) => {
  return (
      <div className='m-list w-auto h-full overflow-scroll flex flex-col items-center'>
        <MetricsList items={props.items} />
      </div>
  );
}

export default Metrics;
