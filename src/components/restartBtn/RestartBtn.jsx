import { gameOver } from "../checkLetter/CheckLetter";


export function RestartBtn(params){
        if(params.data === 0 || gameOver === true){
    
    return (
        <div>
          <button onClick={() => window.location.reload()} className='restartBtn'>Start new game!</button>
        </div>
    );
        }
}