  import './App.css'
  import {
    HashRouter
    , Routes
    , Route,
   
  } from 'react-router';

  import { Home } from './Home'
  import { Setup } from './Setup';
  import { Play } from './Play';
  
  const  App = () => {
    

    console.log(
      "App component Func Called !!!"
   
  );

  return (
   <div
    className='p-4'
   >
    <HashRouter>
      <Routes>
        <Route 
          path='/'
          element={ 
            <Home />
          }
        />
        <Route 
          path='/'
          element={ 
            <Setup />
          }
        />
        <Route 
          path='/play'
          element={ 
            <Play />
          }
        />

      </Routes>
    </HashRouter>
   </div>
  )
}

export default App
