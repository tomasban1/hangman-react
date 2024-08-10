import './App.css';
import { CheckLetter } from './components/checkLetter/CheckLetter';

function App() {
  

  return (
    <>
      <header>
        <h1>Hangman</h1>
      </header>
      <main>
        <div className='hangmanContainer'>
          <img src="./src/img/hangman-0.svg" alt="" />
        </div>
        <CheckLetter />
        <div>
          <button>Start new game!</button>
        </div>
        
      </main>
    </>  

  )
}

export default App
