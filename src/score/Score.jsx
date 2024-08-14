export function Score(){
    
    const score1 = localStorage.getItem('loseData');
    const lose = JSON.parse(score1);
    const score2 = localStorage.getItem('winData');
    const win = JSON.parse(score2);
    
    
    return (
         <>
            <div className="rezCount">
                <p className="rezContainer">Win count: {score2 === null ? 0 : win.length}</p>
                <p className="rezContainer">Lose count: {score1 === null ? 0 : lose.length}</p>
            </div>
        </>
    );

       
}

// 
// 

// const lose = (loseScore.length + 1) / 2;