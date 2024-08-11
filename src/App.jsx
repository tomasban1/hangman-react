import './App.css';
import { CheckLetter, rezData } from './components/checkLetter/CheckLetter';
import { Hangman } from './components/hangman/hangman';

function App() {
  

  return (
    <>
      <header>
        <h1>Hangman</h1>
      </header>
      <main>
        <Hangman data={rezData}/>
        <CheckLetter />
        <div>
          <button className='restartBtn'>Start new game!</button>
        </div>
        
      </main>
    </>  

  )
}

export default App
