import React from 'react';
import { GetData } from './metrics/MetricData';
import Metrics from './metrics/Metrics';
import Chart from './chart/Chart'

const App = () => {
  const data = GetData();
  return (
    <div>
      <Chart />
      <Metrics items={data} />
    </div>
  );
};

export default App;
