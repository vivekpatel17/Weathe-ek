import classes from "./dataCard.module.css";

export default function Card (params) {

    const fullTime = new Date(params.dt*1000-(params.timezone*1000));
    const day = fullTime.toLocaleString("en-US", {
        weekday: "long",
      });
    const date = fullTime.getDate();
    const month = fullTime.getMonth();
    const year = fullTime.getFullYear();
    const icon = params.icon_id;
    const imgurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    
    return (
        <div className={classes.card} >
            <div className={classes.cardHeader}>
                <p>{day}, {date} {month + 1} {year}</p>
            </div>
            <div className={classes.cardimg}>
                <img src={imgurl} alt="Weather Icon" />
                <p>{params.description}</p>
            </div>
            <div className={classes.cardbody}>
                <h1>{params.tempMax}<sub>Hi</sub></h1>
                <h2>{params.tempMin}<sub>Lo</sub></h2>
            </div>
        </div>
    );
};