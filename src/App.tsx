  import './App.css'
  import {
    HashRouter
    , Routes
    , Route,
   
  } from 'react-router';

  const Home = () => {
    
    return (
      <>
          <h3
          className='text-2xl font-bold'
        >
          Home
        </h3>
          <button className="btn btn-active btn-secondry btn-lg mt-4"
        >
          Play Foosball
        </button>
      </>
   
    );
  };
  
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
      </Routes>
    </HashRouter>
   </div>
  )
}

export default App
