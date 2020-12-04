
import './App.css';
import Players from "./players"
import Moves from "./moves";
import { useEffect, useState } from 'react';

function App() {

  const [pScore,setPScore] = useState(0)

  const [cScore,setCScore] = useState(0);

  const [cMove,setCMove] = useState("");

  const [pMove,setPMove] = useState("")

  const selectMoves =["Rock","Paper","Scissors"]

  const possibelMoves = [["Paper","Rock"],["Rock","Scissors"],["Scissors","Paper"]]

  const [winner,setWinner] = useState("")

  function handleClick(move){

    setPMove(move)
    setCMove(selectMoves[Math.floor(Math.random()*3)])

    if(pMove === cMove && pMove){
      
      setWinner("Its  a Draw !")
    
    } 
    

   
  }

  useEffect(()=>{
  
    if(pMove === cMove && pMove){
      
      setWinner("Its  a Draw !")
    
    } else  if(pMove !== cMove){

      possibelMoves.forEach(arr => {

        if(pMove == arr[0] && cMove == arr[1]){
         
          setPScore(prevState => prevState +1);
          setWinner("You Win !!")


        } else if(cMove == arr[0] && pMove == arr[1]){

          setCScore(prevState => prevState + 1)
          setWinner("Computer Wins !!")
        }

      }) }

   
  },[pMove,cMove])

 

  return (
    <div className="main-container">
      <h1>ROCK PAPER SCISSORS</h1>
     <Players pScore={pScore} cScore={cScore}  pMove={pMove} cMove={cMove}/>
     <Moves  handleClick={handleClick}  winner={winner} />
     
    </div>
  );
}

export default App;
