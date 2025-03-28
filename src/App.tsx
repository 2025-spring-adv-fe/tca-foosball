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

  const [totalGamesCount, setTurnNumberCount] = useState(6);

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
            <Setup totalGameCount={0} />
          }
        />
        <Route 
          path='/play'
          element={ 
            <Play totalGameCount={0} />
          }
        />

      </Routes>
    </HashRouter>
   </div>
  )
}

export default App
