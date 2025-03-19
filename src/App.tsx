import { useState } from 'react'
import './App.css'

<<<<<<< Updated upstream
function App() {
  
=======
  import './App.css'

  interface AppProps {
    timestamp: string;
    magicNumber: number;
  }

  const App: React.FC<AppProps> = (
    // props: any

    // Destructuring....
  {
    timestamp
    , magicNumber
  }
) => {
    

    console.log(
      "App component Func Called !!!"
    // , typeof(props)
    // , props
  );
>>>>>>> Stashed changes

  return (
   <div>
    <h1
      className='text-2xl font-bold'
    >
      TCA Foos Ball
    </h1>
    <button
      className='btn btn-secondary btn-soft btn-xl'
      
    >
      Play Foos Ball
    </button>

   </div>
  )
}

export default App
