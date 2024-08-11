import './App.css';
import { CheckLetter } from './components/checkLetter/CheckLetter';


function App() {
  

  return (
    <>
      <header>
        <h1>Hangman</h1>
      </header>
      <main>
        
        <CheckLetter />
        <div>
          <button className='restartBtn'>Start new game!</button>
        </div>
        
      </main>
    </>  

  )
}

export default App
