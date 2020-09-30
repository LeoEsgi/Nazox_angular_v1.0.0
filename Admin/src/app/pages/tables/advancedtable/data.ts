import { ChartType } from '../../chart/echart/echart.model';
import { graphic } from 'echarts';

const tableData = [
  {
    name: 'Timoteo Lyddy',
    position: 'Recruiting Manager',
    office: 'Vidago',
    age: 29,
    date: '2018/12/04',
    salary: '$11700',
    unit: 78,
    enddate: '2020/12/06'
  }, {
    name: 'Cherye Bleby',
    position: 'Quality Engineer',
    office: 'La Concordia',
    age: 62,
    date: '2018/10/04',
    salary: '$14700',
    unit: 88,
    enddate: '2020/12/08'
  }, {
    name: 'Zacharias O\'Shaughnessy',
    position: 'Senior Editor',
    office: 'Maungatapere',
    age: 26,
    date: '2018/07/30',
    salary: '$11600',
    unit: 89,
    enddate: '2020/12/10'
  }, {
    name: 'Odie Jentin',
    position: 'Programmer II',
    office: 'Grabovci',
    age: 26,
    date: '2019/05/16',
    salary: '$11200',
    unit: 90,
    enddate: '2020/06/08'
  }, {
    name: 'Eugenie Sang',
    position: 'Operator',
    office: 'Oxbow',
    age: 59,
    date: '2019/07/16',
    salary: '$15200',
    unit: 98,
    enddate: '2020/05/08'
  }
];

const gaugeChartPEC: ChartType = {
  tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
      feature: {
          restore: { title: "Refresh" },
          saveAsImage: { title: "Download Image" }
      }
  },
  series: [
      {
          name: 'Taux PEC',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          axisLine: {
              lineStyle: {
                  color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f46a6a']],
                  width: 20
              }
          },
          data: [{ value: 50, name: 'Completion rate' }]
      }
  ]
};

const gaugeChartTR90: ChartType = {
  tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
      feature: {
          restore: { title: "Refresh" },
          saveAsImage: { title: "Download Image" }
      }
  },
  series: [
      {
          name: 'Niveau TR90',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          axisLine: {
              lineStyle: {
                  color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f46a6a']],
                  width: 20
              }
          },
          data: [{ value: 50, name: 'Completion rate' }]
      }
  ]
};

export { tableData , gaugeChartTR90 , gaugeChartPEC };


