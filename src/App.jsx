import './App.css';
import { CheckLetter } from './components/checkLetter/CheckLetter';
import { RestartBtn } from './components/restartBtn/RestartBtn';


function App() {
  


  return (
    <>
      <header>
        <h1>Hangman</h1>
      </header>
      <main>
        <CheckLetter />
        <RestartBtn />
        
      </main>
    </>  

  )
}

export default App
