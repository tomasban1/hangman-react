import { useState } from "react";
import { randomWord } from "../words/GenerateWord";
import { Hangman } from "../hangman/hangman";
import { RestartBtn } from "../restartBtn/RestartBtn";


export let gameOver = false; 
export function CheckLetter(params){
    const { updateLoseCount, updateWinCount } = params;

    const keyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 
                    'U', 'I', 'O', 'P', 'A', 'S', 'D', 
                    'F', 'G', 'H', 'J', 'K', 'L', 'Z', 
                    'X', 'C', 'V', 'B', 'N', 'M'];
    
   
    let correctGuessed = [];

    const [correct, setCorrect] = useState([]);
    let [count, setCount] = useState(6);
    
    function loseLife(){
        setCount(count - 1);
    }
    
     const hiddenWord = randomWord.map((letter, index) => correct.includes(letter) 
    ? <ul key={index} className="wordLetter">{letter}</ul>
    : <ul key={index} className="wordLetter"></ul>);


randomWord.map(letter => correct.includes(letter) ? correctGuessed.push(letter) : correctGuessed);
    function hancleClick(e){
        const key = e.target.innerText;
        if(randomWord.includes(key) && !gameOver){
            setCorrect([...correct, key]);
            e.currentTarget.classList.add('highlightCorrect');
        }else if(!gameOver){
             e.currentTarget.classList.add('highlightIncorrect');
            loseLife();
        }
        
    }
 
  
    const buttons = keyboard.map((letter, index) => <button onClick={hancleClick}  className="boardBtn" key={index}>{letter}</button>);
    
    const CheckWin = () => { 
            if(randomWord.length === correctGuessed.length){
                gameOver = true;
                
                return <p>You win!</p>  
            }
       
    }

    console.log(randomWord);
    
    const LifeCounter = () => {
        if(count < 1){
            count = 0;
            gameOver = true;
            // alert('Game over!')
            return <p className="loseContainer">Game over!</p>
        }else{
            return <p className="livesContainer">Lives left: {count}</p>
                    
        }
    }
 
    const buttonDom = document.querySelectorAll('.boardBtn');
    
    

    window.addEventListener('keyup', (e) => {
        const upperCase = e.key.toUpperCase();
        if(randomWord.includes(upperCase) && !gameOver){
            setCorrect([...correct, upperCase]);
            console.log(e.target);
            
        }else if(!gameOver){
            loseLife();
        }
        
    })

    return (
        <>  
            <Hangman data={count} />
            <div className="letterContainer">
                {hiddenWord}
            </div>
            <div className="keyboardContainer">
                {buttons}
            </div>
            <div className="winContainer">
                <CheckWin />     
            </div>
            <div>
                <LifeCounter  />
            </div>
            <RestartBtn updateWinCount={updateWinCount} updateLoseCount={updateLoseCount} data={count} />
        </>    
    );
}



