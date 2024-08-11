import { useState } from "react";
import { randomWord } from "../words/GenerateWord";

export let rezData = 6;

export function CheckLetter(){

    const keyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 
                    'U', 'I', 'O', 'P', 'A', 'S', 'D', 
                    'F', 'G', 'H', 'J', 'K', 'L', 'Z', 
                    'X', 'C', 'V', 'B', 'N', 'M'];
    
    
    const [correct, setCorrect] = useState([]);
    const hiddenWord = randomWord.map((letter,index) => correct.includes(letter) 
    ? <ul key={index} className="wordLetter">{letter}</ul> 
    : <ul key={index} className="wordLetter"></ul>);

    let [count, setCount] = useState(6);
    function loseLife(){
        setCount(count - 1);
        rezData--;
    }

  
    const Keyboard =
        keyboard.map((letter) => <button onClick={(e) => {if(randomWord.includes(letter) && gameOver === false){
                    setCorrect([...correct, letter])
                    e.currentTarget.classList.add('highlightCorrect')
                }else{if(gameOver === false){
                    e.currentTarget.classList.add('highlightIncorrect')
                    loseLife()}}}} className="boardBtn" key={letter}>{letter}</button>)
    
    let gameOver = false; 
    const Counter = () => {
        if(count < 1){
            count = 0;
            gameOver = true;
            return <p>Game over!</p>
        }else{
            return <p>{count}</p>
        }
    }
   
    
    
    return (
        <>
            <div className="letterContainer">
                {hiddenWord}
            </div>
            <div className="keyboardContainer">
                {Keyboard}
                <Counter />
            </div>
           
        </>    
    );
}


