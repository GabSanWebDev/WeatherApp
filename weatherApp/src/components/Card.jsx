import React from 'react';
import styles from '../styles/Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({min, max, name, img, onClose, id}) {
  return (
  
  <div className={styles.card}>
  <button className={styles.btn} onClick={() => onClose("Eliminando ciudad")}>Delete Card</button>
  <Link to={`/city/${id}`} className={styles.links}>
    <h2 className={styles.titulo}>{name}</h2>
    <img className={styles.image} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="imagen"/>
    <div className={styles.temps}>
      <p className={styles.text}>Min temp: <span className={styles.span}>{min}°</span></p>
      <p className={styles.text}>Max temp: <span className={styles.span}>{max}°</span></p>
    </div>
    </Link>
  </div>
)
};