import React,{useRef} from "react"
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock,faHandPaper,faHandScissors } from '@fortawesome/free-solid-svg-icons'


function Moves(props){

   
    function handleRock(event){
       
       
       props.handleClick( "Rock")
    }
    function handlePaper(event){
       
       
       props.handleClick("Paper")

    }
    function handleScissors(event){
       
       
       props.handleClick("Scissors")

    }

    return(<div>

          <h1 className="winner">{props.winner != "" ? props.winner : ""}</h1>
          <span onClick={handleRock} id="Rock" > <FontAwesomeIcon icon={faHandRock} className="moves" /></span>
          <span  onClick={handlePaper} id="Paper" > <FontAwesomeIcon icon={faHandPaper} className="moves"/></span>
          <span onClick={handleScissors} id="Scissors" ><FontAwesomeIcon icon={faHandScissors} className="moves" /></span>

    </div>)

}

export default Moves;