import _ from 'lodash';
import React from 'react';
// import IHighCharts from 'react-highcharts-v5/src/HighCharts.js';
import IHighCharts from 'react-highcharts-v5';

function getRndNum(len = 8) {
  const data = [];
  for (let i = 0, min = 0, max = 99999; i < len; i++) {
    data.push(Math.floor(Math.random() * (max + 1 - min) + min));
  }
  return data;
}

class Demo01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      loading: false,
      options: {
        title: {
          text: 'Solar Employment Growth by Sector, 2010-2016'
        },
        subtitle: {
          text: 'Source: thesolarfoundation.com'
        },
        yAxis: {
          title: {
            text: 'Number of Employees'
          }
        },
        series: [{
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }]
      }
    };
  }

  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }

  onLoad = (instance, echarts) => {
    // const that = this;
    // const {
    // } = that.state;
    // const {
    // } = that.props;
    console.log(instance, echarts);
  }

  onResize = (width, height) => {
    // const that = this;
    // const {
    // } = that.state;
    // const {
    // } = that.props;
    console.log(width, height);
  }

  doLoading = () => {
    const that = this;
    const {
      loading,
      options
    } = that.state;
    // const {
    // } = that.props;

    const opts = _.cloneDeep(options);
    opts.series[0].data = getRndNum(8);
    opts.series[1].data = getRndNum(8);
    opts.series[2].data = getRndNum(8);
    opts.series[3].data = getRndNum(8);
    opts.series[4].data = getRndNum(8);

    const style = {
      width: Math.floor(Math.random() * (1024 + 1 - 400) + 400) + 'px',
      height: Math.floor(Math.random() * (768 + 1 - 200) + 200) + 'px'
    };

    that.setState({
      style,
      loading: !loading,
      options: opts
    });
  }

  render() {
    const that = this;
    const {
      style,
      loading,
      options
    } = that.state;
    // const {
    // } = that.props;
    return (
      <div className="charts">
        <div>
          <button onClick={that.doLoading}>Random</button>
        </div>
        <div className="highcharts" style={style}>
          <IHighCharts
            resizable
            loading={loading}
            options={options}
            onLoad={that.onLoad}
            onResize={that.onResize}
          />
        </div>
      </div>
    );
  }
}

export default Demo01;
