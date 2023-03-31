import React from 'react';
import formatDate from '../utility/Date';

const MetricItem = (props) => {
  return <div className='container h-12 w-full bg-white flex rounded flex-row self-center px-2'>
    <div className="w-full flex flex-row justify-between items-center my-2.5">
      <div className="text-sm text-black"><p>{formatDate(props.date)}</p></div>
      <div><p className='text-sm text-black'>{props.name}</p></div>
      <div className=''><p className='text-sm text-black'>${(props.value).toFixed(2)}</p></div>
    </div>
  </div>
}

export default MetricItem;
