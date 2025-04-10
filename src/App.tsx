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
import { GameResult } from './GameResults';
  
  const dummyGameResults: GameResult[] = [
    {
        winner: "Hermione"
        , players: [
            "Hermione"
            , "Harry"
            , "Ron"
        ]
        
    }
    , {
        winner: "Ron"
        , players: [
            "Hermione"
            , "Ron"
        ]
    }
    , {
        winner: "Larry"
        , players: [
            "Larry"
            , "Curly"
            , "Moe"
        ]
    }
    , {
        winner: "Harry"
        , players: [
            "Curly"
            , "Harry"
        ]
    }
    , {
        winner: "Ron"
        , players: [
            "Ron"
            , "Voldemort"
        ]
    }
    , {
        winner: "Voldemort"
        , players: [
            "Ron"
            , "Voldemort"
        ]
    }
];

  const  App = () => {
    

    console.log(
      "App component Func Called !!!"
   
  );

  const [totalGamesCount, setTotalGameCount] = useState(0);

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
              totalGameCount={totalGamesCount} 
              setTotalGameCount={setTotalGameCount}
            />
          }
        />

      </Routes>
    </HashRouter>
   </div>
  )
}

export default App
