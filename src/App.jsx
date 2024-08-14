import './App.css';
import { CheckLetter } from './components/checkLetter/CheckLetter';
import { Score } from './score/Score';



function App() {
  


  return (
    <>
      <header>
        <h1>Hangman</h1>
        <Score />
      </header>
      <main>
        <CheckLetter />
      </main>
    </>  
  )
}

export default App
