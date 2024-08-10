import { useState } from "react";
import { randomWord } from "../words/GenerateWord";


export function CheckLetter(){

    const keyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 
                    'U', 'I', 'O', 'P', 'A', 'S', 'D', 
                    'F', 'G', 'H', 'J', 'K', 'L', 'Z', 
                    'X', 'C', 'V', 'B', 'N', 'M'];
    
    const [correct, setCorrect] = useState([]);
    const hiddenWord = randomWord.map((letter,index) => correct.includes(letter) 
    ? <ul key={index} className="wordLetter">{letter}</ul> 
    : <ul key={index} className="wordLetter"></ul>);
    
    
    


    return (
        <>
            <div className="letterContainer">
                {hiddenWord}
            </div>
            <div className="keyboardContainer">
                {keyboard.map((letter) => <button onClick={() => {if(randomWord.includes(letter)){
                    setCorrect([...correct, letter])
                }}} className="boardBtn" key={letter}>{letter}</button>)}
            </div>
           
        </>    
    );
}
