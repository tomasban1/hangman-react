
import { useEffect, useState } from 'react';
import './App.css';
import { CheckLetter } from './components/checkLetter/CheckLetter';
import { Score } from './components/score/Score';



function App() {
 const [loseCount, setLoseCount] = useState(readLoseData());

 function updateLoseCount(){
  setLoseCount(prev => prev + 1);
 }

 function readLoseData(){
  const loseData = localStorage.getItem('loseData');
   if(loseData){
    return JSON.parse(loseData)
   }
   return 0;
 }
 useEffect(() => {
  localStorage.setItem('loseData', loseCount);
 },[loseCount]);


 const [winCount, setWinCount] = useState(readWinData());

 function updateWinCount(){
  setWinCount(prev => prev + 1);
 }

 function readWinData(){
  const winData = localStorage.getItem('winData');
  if(winData){
    return JSON.parse(winData);
  }
  return 0;
 }

 useEffect(() => {
  localStorage.setItem('winData', winCount);
 }, [winCount])

  return (
    <>
      <header>
        <h1>H a n g m a n</h1>
        <Score />
      </header>
      <main>
        <CheckLetter updateLoseCount={updateLoseCount} updateWinCount={updateWinCount} />
      </main>
    </>  
  )
}

export default App
