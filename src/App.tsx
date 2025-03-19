
  import './App.css'

  const App = (
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

  return (
   <div>
    <h1
      className='text-2xl font-bold'
    >
      TCA Foos Ball
    </h1>
    <p>
      { timestamp } - { magicNumber }
    </p>
    <button
      className='btn btn-secondary btn-soft btn-xl'
      
    >
      Play Foos Ball
    </button>

   </div>
  )

}

export default App
