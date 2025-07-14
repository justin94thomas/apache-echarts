import React from 'react';
import ReactECharts from 'echarts-for-react';

const ECharts = ({ option, height = '400px', width = '100%' }) => {
  return <ReactECharts option={option} style={{ height, width }} />;
};

export default ECharts;
