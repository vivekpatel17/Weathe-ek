import Card from "./dataCard";
import classes from "./ForecastData.module.css";


export default function Api({manyDay}) {

    return (
        <div className={classes.data}>
            <div className={classes.dailyData} >
                {manyDay.daily.map((data, index) => {
                    return (
                        <Card 
                            key={index}
                            dt = {data.dt}
                            timezone = {manyDay.timezone_offset}
                            icon_id = {data.weather[0].icon}
                            description = {data.weather[0].description}
                            tempMax = {data.temp.max}
                            tempMin = {data.temp.min}
                        />
                    );
                })}
            </div>
        </div>
    )
}; 