import { gameOver } from "../checkLetter/CheckLetter";


export function RestartBtn(params){
  const { updateWinCount, updateLoseCount } = params;
   if(params.data === 0){
    return (
        <div>
          <button onClick={() => {updateLoseCount() ,window.location.reload()}} className='restartBtn'>Start new game!</button>
        </div>
    );
  }else if(gameOver === true){
    
      return (
        <div>
          <button onClick={() => {updateWinCount(), window.location.reload()}} className='restartBtn'>Start new game!</button>
        </div>
    );
  }
        
}