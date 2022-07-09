
import './ChartBar.css';

const ChartBar = (props) =>{

    let barFillHeight = '0%';

    if(props.maxValue>0){
        barFillHeight = Math.round(props.value/props.maxValue * 100) + '%';
    }

    const barStyle = {
        height: barFillHeight
    }

    return (
        <div className='chart-bar' >
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={barStyle} ></div>
            </div>
            <div className="chart-bar__label">
                <div>{props.label.month}</div>
                <div>{props.label.value}</div>
            </div>
        </div>
    )
}

export default ChartBar