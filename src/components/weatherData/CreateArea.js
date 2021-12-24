import {useState} from "react";
import searchIcon from "../../images/searchIcon.jpg";
import ForecastData from "./ForecastData";

import classes from "./CreateArea.module.css";

export default function CreateArea() {
    const [input, setInput] = useState("");

    const [oneDay, setoneDay] = useState();
    const [manyDay, setmanyDay] = useState();

    function handleChange(event) {
        setInput(event.target.value);
    }

    async function callApi() {

            const apiKey = "2a3edf913a2f9c38581351c612926b48";
            const unit = "metric";
            const city = input;
            const urlOneDay = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + unit;

            const resOneDay = await fetch(urlOneDay);
            const dataOneDay = await resOneDay.json();
            setoneDay(dataOneDay);

            const lon = dataOneDay.coord.lon;
            const lat = dataOneDay.coord.lat;
            const urlManyDays = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=" + apiKey + "&units=" + unit;

            const resManyDay = await fetch(urlManyDays);
            const dataManyDay = await resManyDay.json();
            setmanyDay(dataManyDay);
    }
    
    return (
        <div className={classes.area}>
            <div className={classes.input}>
                <input className={classes.textArea}
                name="City"
                onChange={handleChange}
                type="text"
                value={input}
                placeholder="Location" 
                />
                <button className={classes.btnArea} onClick={callApi}>
                    <img src={searchIcon} alt="Search Button" />   
                </button>
            </div>
            
            <div>
                {manyDay && <ForecastData manyDay = {manyDay}/>}
            </div>
        </div>
        
    );
};