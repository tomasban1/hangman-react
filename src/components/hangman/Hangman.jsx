
import  img0 from "/src/components/img/hangman-0.svg";
import  img1 from "/src/components/img/hangman-1.svg";
import  img2 from "/src/components/img/hangman-2.svg";
import  img3 from "/src/components/img/hangman-3.svg";
import  img4 from "/src/components/img/hangman-4.svg";
import  img5 from "/src/components/img/hangman-5.svg";
import  img6 from "/src/components/img/hangman-6.svg";


export function Hangman(params){
    const handleImg = params.data === 6 
    ? img0 
    : params.data === 5 
    ? img1 
    : params.data === 4 
    ? img2 
    : params.data === 3 
    ? img3 
    : params.data === 2 
    ? img4 
    : params.data === 1 
    ? img5 
    : params.data === 0 
    ? img6
    : img0
    
    return (
        <div className='hangmanContainer'>
          <img src={handleImg} alt=""/>
        </div>
    );

}

