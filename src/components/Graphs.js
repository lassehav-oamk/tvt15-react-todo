import React, { Component } from 'react';
const ReactHighcharts = require('react-highcharts');

class Graphs extends Component {
    render () {

        /*
        {
            name: 'IE',
            y: 56.33
        }
        */
        let processedTodoTypes = [];
        this.props.items.forEach(element => {
            let todoIndex = processedTodoTypes.findIndex(todoType => todoType.name === element.type);
            if(todoIndex == -1)
            {
                processedTodoTypes.push({
                    name: element.type,
                    y: 1
                });
            }
            else
            {
                processedTodoTypes[todoIndex].y++;
            }
        });

        const config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: processedTodoTypes
            }]
        };
        return (
            <div>
                <ReactHighcharts config = {config}></ReactHighcharts>
            </div>
        )
    }
}

export default Graphs