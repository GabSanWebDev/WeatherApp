import React from 'react';
import styles from '../styles/City.module.css'

export default function City({ city}) {
    if (!city) {
        return <h2>Ciudad no disponible</h2>
    } else {
        return <div >
        <div className={styles.mainCard}>
            <h2 className={styles.title}>Location: {city.name}</h2>
            <div className={styles.imagenContainer}><img className={styles.img} src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} alt="imagen"/></div>
            <div className={styles.info}>
                <div>Temperature:</div> <div><span className={styles.span}>{city.temp} ºC</span></div>
                <div>Weather:</div> <div> <span className={styles.span}>{city.weather}</span></div>
                <div>Wind:</div> <div> <span className={styles.span}>{city.wind} km/h</span></div>
                <div>CLoud amount:</div> <div> <span className={styles.span}>{city.clouds}</span></div>
                <div>Latitude:</div> <div> <span className={styles.span}>{city.latitud}º</span></div>
                <div>Longitude:</div> <div> <span className={styles.span}>{city.longitud}º</span></div>
            </div>
    </div>
    </div>

    }

}