import { rezData } from "../checkLetter/CheckLetter";



export function Hangman(params){
    const HandleImg = () => {
        console.log(params.data)
        
        if(rezData === 6){
            return <img src="./src/img/hangman-0.svg" alt="" />
        }
        if(rezData === 5){
            return <img src="./src/img/hangman-1.svg" alt="" />
        }
        if(rezData === 4){
            return <img src="./src/img/hangman-2.svg" alt="" />
        }
        if(rezData === 3){
            return <img src="./src/img/hangman-3.svg" alt="" />
        }
        if(rezData === 2){
            return <img src="./src/img/hangman-4.svg" alt="" />
        }
        if(rezData === 1){
            return <img src="./src/img/hangman-5.svg" alt="" />
        }
    
}

    return (
        <div className='hangmanContainer'>
          <HandleImg />
        </div>
    );
}

// switch(rezData){
//             case 5: return <img src="./src/img/hangman-1.svg" alt="" />
//             case 4: return <img src="./src/img/hangman-2.svg" alt="" />
//             case 3: return <img src="./src/img/hangman-3.svg" alt="" />
//             case 2: return <img src="./src/img/hangman-4.svg" alt="" />
//             case 1: return <img src="./src/img/hangman-5.svg" alt="" />
//             default: return <img src="./src/img/hangman-0.svg" alt="" />
//         }