


export function Score(){
    
    const score1 = localStorage.getItem('loseData');
    const lose = JSON.parse(score1);
    
    const score2 = localStorage.getItem('winData');
    const win = JSON.parse(score2);
   
    
    return (
         <>
            <div className="rezCount">
                <p className="scoreWinContainer">Win count: {win}</p>
                <p className="scoreLoseContainer">Lose count: {lose}</p>
            </div>
        </>
    );

       
}

// 
// 

// const lose = (loseScore.length + 1) / 2;