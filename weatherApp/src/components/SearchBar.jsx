import React, { useState } from "react";
import styles from '../styles/Searchbar.module.css'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        className={styles.placeholder} 
        type="text" 
        placeholder="Type your city here..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={styles.btnSearch} type="submit" value="Add" />
    </form>
  );
}




// export default function SearchBar(props) {
//   // acá va tu código
//   return <>
//     <input className={styles.placeholder} type="text" placeholder="Agrega una ciudad"/>
//     <button  className={styles.btnSearch} onClick={() => props.onSearch("Agregando...")}>Add City</button>
//   </>
// };