import { useState } from 'react' // Importing the useState hook from React (though not used in this code)
import './App.css' // Importing external CSS file for styling

function App() { // Main App component

  return (
    <div>
      {/* Header Section */}
      <h1 className='text-2xl font-bold bg-base-300 p-4 text-secondary'>
        TCA Foos Ball
      </h1>

      {/* Main Container */}
      <div className="p-4">
        {/* Play Button */}
        <button 
          className='btn btn-secondary btn-soft btn-xl w-full lg:w-auto text-nowrap'
        >
          Play Foos Ball
        </button>

        {/* Subheading */}
        <h2 className='mt-3 text-xl font-semi-bold'>
          Leaderbored.. {/* Typo: Should be "Leaderboard" */}
        </h2>

        {/* Grid Layout for Leaderboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Repeated Leaderboard Cards */}
          <div className="card w-full bg-base-100 card-lg shadow-sm mt-4">
            <div className="card-body">
              <h2 className="card-title">Leaderboard...</h2>
              <p>Leaderboard coming soon ....</p>
            </div>
          </div>

          <div className="card w-full bg-base-100 card-lg shadow-sm mt-4">
            <div className="card-body">
              <h2 className="card-title">Leaderboard...</h2>
              <p>Leaderboard coming soon ....</p>
            </div>
          </div>

          <div className="card w-full bg-base-100 card-lg shadow-sm mt-4">
            <div className="card-body">
              <h2 className="card-title">Leaderboard...</h2>
              <p>Leaderboard coming soon ....</p>
            </div>
          </div>

          <div className="card w-full bg-base-100 card-lg shadow-sm mt-4">
            <div className="card-body">
              <h2 className="card-title">Leaderboard...</h2>
              <p>Leaderboard coming soon ....</p>
            </div>
          </div>

          {/* Special Card with Chat Bubbles */}
          <div className="card w-full bg-base-100 card-lg shadow-sm mt-4">
            <div className="card-body">
              <h2 className="card-title">Leaderboard...</h2>

              {/* Chat Section - Star Wars Themed Conversation */}
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">
                  What kind of nonsense is this
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary">
                  Put me on the Council and not make me a Master!??
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-accent">
                  That's never been done in the history of the Jedi.
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-neutral">
                  It's insulting!
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info">
                  Calm down, Anakin.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-success">
                  You have been given a great honor.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-warning">
                  To be on the Council at your age.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-error">
                  It's never happened before.
                </div>
              </div>
            </div>
          </div>

        </div> {/* End of Grid */}
      </div> {/* End of Main Container */}
    </div> 
  )
}

export default App // Exporting App component
