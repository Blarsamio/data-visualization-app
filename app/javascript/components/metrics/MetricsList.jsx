import MetricItem from "./MetricItem";
import React from "react";

const MetricsList = (props) => {
  return (<ul className='rounded bg-white justify-center h-auto w-10/12 flex flex-col'>
  {props.items.map((metric) => (
    <MetricItem key={metric.avg} name={metric.name} value={metric.avg} date={metric.month} />
  ))}
  </ul>
  );
}

export default MetricsList;
