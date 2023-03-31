import React, {useState} from 'react';
import { GetData, GetFrequency } from './metrics/MetricData';
import Metrics from './metrics/Metrics';
import Chart from './chart/Chart'

const App = () => {
  const data = GetFrequency("monthly");
  const [isFormVisible, setIsFormVisible] = useState(true);

  const toggleListVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className='flex flex-col h-full w-full justify-center'>
      <div className='container h-screen w-2/3 flex bg-red-500 text-white grow flex-col p-1 self-center'>
        <div className='h-auto w-auto bg-white rounded items-center m-5'>
          <Chart  />
        </div>
        <button onClick={toggleListVisibility} className='w-30 self-center mb-5'>
          <p>{isFormVisible ? 'Hide Metrics List' : 'Show Metrics List'}</p>
        </button>
        <div className='w-full self-center h-auto flex flex-col overflow-scroll'>
          {isFormVisible && <Metrics items={data} />}
        </div>
      </div>
    </div>
  );
};

export default App;
