import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css'

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={styles.container}>
        {cities.map(city => <Card
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            key={city.id}
            id={city.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}

// export default function Cards(props) {
//   // acá va tu código
//   // tip, podés usar un map
//   return <div className={styles.container}>{
//     props.cities.map(city =>(
//       <Card 
//         key = {city.id}
//         onClose={() => alert(city.name)}
//         name={city.name}
//         max={city.main.temp_max}
//         min={city.main.temp_min}
//         img={city.weather[0].icon}
//       />
//     ))
//   }</div>
// };