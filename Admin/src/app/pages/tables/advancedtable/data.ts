import { ChartType } from '../../chart/echart/echart.model';
import { graphic } from 'echarts';

const tableData = [
    {
        name: 'Flux test 1',
        position: '25',
        office: '0%',
        age: 29,
        date: '0',
        salary: '100%',
        unit: 78,
        enddate: '0'
    },
    {
        name: 'Flux test 1',
        position: '25',
        office: '100%',
        age: 29,
        date: '0',
        salary: '0%',
        unit: 78,
        enddate: '0'
    },
    {
        name: 'Flux test 2',
        position: '25',
        office: '100%',
        age: 29,
        date: '0',
        salary: '5%',
        unit: 78,
        enddate: '0'
    },  {
        name: 'Flux test 3',
        position: '25',
        office: '100%',
        age: 29,
        date: '0',
        salary: '10%',
        unit: 78,
        enddate: '0'
    }
];

const gaugeChartPEC: ChartType = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
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
            data: [{ value: 75, name: 'Taux Pec'}]
        }
    ]
};

const gaugeChartTR90: ChartType = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
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
            data: [{ value: 23, name: 'TR90' }]
        }
    ]
};


const barChartAppelEnCours: ChartType = {
    color: ['#50a5f1'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['En Attente', 'En Traitement'],
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            },
            axisLine: {
                show: false
            },
        },
    ],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    }],
    series: [{
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 8]
    }]
};

const barChartAppelDistrib: ChartType = {
    color: ['#50a5f1'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Reçus', 'Offerts', 'Répondus', 'Abandonnés'],
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            },
            axisLine: {
                show: false
            },
        },
    ],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    }],
    series: [{
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [2, 2, 2, 0]
    }]
};

const barChartAppelVolume: ChartType = {
    color: ['#50a5f1'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Ciblage 1', 'Ciblage 2', 'Ciblage 3'],
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            },
            axisLine: {
                show: false
            },
        },
    ],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    }],
    series: [{
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [2, 0, 0]
    }]
};


export { tableData, gaugeChartTR90, gaugeChartPEC, barChartAppelEnCours, barChartAppelDistrib, barChartAppelVolume };


