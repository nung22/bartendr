import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CocktailCard from './components/CocktailCard'
import { Drinks } from './typings'

function App() {
  const [loaded, setLoaded] = useState(false);
  const [drinks, setDrinks] = useState<Drinks | null>(null);


  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => {
      console.log(res.data.drinks);
      setDrinks(res.data.drinks);
      setLoaded(true);
    });
  }, [loaded]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setLoaded(!loaded)}>
          I'm feeling lucky
        </button>
        <h2>Random Cocktail</h2>
        <div style={{ width: 300 }}>
          {loaded ? (
            <>
              <CocktailCard drinks={drinks} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
