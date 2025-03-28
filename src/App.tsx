  import './App.css'
  import {
    HashRouter
    , Routes
    , Route,
   
  } from 'react-router';


  import { Home } from './Home'
  import { Setup } from './Setup';
  import { Play } from './Play';
  import { useState } from 'react'
  
  const  App = () => {
    

    console.log(
      "App component Func Called !!!"
   
  );

  const [totalGamesCount, setTurn1NumberCount] = useState(6);

  return (
   <div
    className='p-4'
   >
    <HashRouter>
      <Routes>
        <Route 
          path='/'
          element={ 
            <Home
              totalGameCount={totalGamesCount}
            />
          }
        />
        <Route 
          path='/setup'
          element={ 
            <Setup 
              totalGameCount={totalGamesCount} />
          }
        />
        <Route 
          path='/play'
          element={ 
            <Play 
              totalGameCount={totalGamesCount} />
          }
        />

      </Routes>
    </HashRouter>
   </div>
  )
}

export default App
