import React from 'react';
import GetData from './metrics/MetricData';
import Metrics from './metrics/Metrics';

const App = () => {
  const data = GetData();
  return (
    <div>
      <Metrics items={data} />
    </div>
  );
};

export default App;
