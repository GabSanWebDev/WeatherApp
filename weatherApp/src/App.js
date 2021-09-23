import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav';
import { Route } from 'react-router';
import City from './components/City';
import About from './components/About';


export default function App() {

  const [cities, setCities] = useState([]);
  //cities = [];
    //setCities(estado_anterior => [...estado_anterior, city])
    //cities =[city];

  function onSearch(city){
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(ans => ans.json())
      .then((recurso) => {

        let cityExists = cities.some(city => city.id === recurso.id);

        if(cityExists){
          alert('Parece que ya has añadido esta ciudad')
        } else if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }

      });
  }
  function onClose(id){
    //cities = [{arreglo de objetos}]
    setCities(city => city.filter(city => city.id !== id))

  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Route path='/' >
        <Nav onSearch={onSearch}/>
      </Route>
      <Route path='/' exact>
      <Cards
          cities={cities}
          onClose={onClose}
        />
      </Route>
      <Route path='/about' exact component={About} />
      <Route path='/city/:cityId' exact render={({match}) => <City city={onFilter(match.params.cityId)}/>} />


    </div>
  );
}





// function App() {
//   return (
    
//     <div className="App">
//     <div className={styles.container}>
//       <h1>Weather App</h1>
//       {/* <div>
//         <Card
//           max={Cairns.main.temp_max}
//           min={Cairns.main.temp_min}
//           name={Cairns.name}
//           img={Cairns.weather[0].icon}
//           onClose={() => alert(Cairns.name)}
//         />
//       </div> */}
//         <div className={styles.searchBar}>
//           <SearchBar
//             onSearch={(ciudad) => alert(ciudad)}
//           />
//         </div>
//       </div>

//       <div>
//         <Cards
//           cities={data}
//         />
//       </div>
//       <hr />

//     </div>
//   );
// }

// export default App;
