
import ChartBar from './ChartBar'
import './Chart.css';

const Chart = (props) => {

    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value) ;

    const maxInArray = Math.max(...dataPointValue);
    const max = (Math.round(maxInArray/100)+1)*100 ; 

    const chartBars = props.dataPoints.map( (dataPoint) =>{
        return <ChartBar 
                        value={dataPoint.value} 
                        maxValue={max} 
                        label={{month: dataPoint.label,value:dataPoint.value}}
                        key={dataPoint.label}/>
    })

    return (
        <div className="chart">
            {chartBars}
        </div>
    )
}

export default Chart