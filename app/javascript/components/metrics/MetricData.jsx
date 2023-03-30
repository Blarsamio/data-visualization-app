import React from 'react';

export const GetData = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/v1/metrics')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  return data;
}

export const GetMonthly = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('/monthly_average')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  return data;
}
