import { useState, useEffect } from 'react';

export const GetData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/v1/metrics')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  return data;
}

export const GetFrequency = (freq) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/${freq}_average`)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  return data;
}
