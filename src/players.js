import React from "react"
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock,faHandPaper,faHandScissors } from '@fortawesome/free-solid-svg-icons'

function Players(props){

    const style={backgroundColor:"none",border:"none"}

    return(
    <div className="player-grid">
        <div className="grid">
            <h2>You :{props.pScore}</h2>
             <h1>
                {   props.pMove != "" ?  
              props.pMove === "Rock" ?  <FontAwesomeIcon icon={faHandRock} className="noBorder"  /> : 
             props.pMove === "Paper" ? <FontAwesomeIcon icon={faHandPaper} className="noBorder" /> :
             <FontAwesomeIcon icon={faHandScissors} className="noBorder"  />   :
              ""
              } 
              </h1>
        </div>

        <div className="grid">
            <h2>Computer :{props.cScore}</h2>
            <h1>
                {
                      props.cMove != "" ?  
                props.cMove === "Rock" ?  <FontAwesomeIcon icon={faHandRock} className="noBorder"/> : 
             props.cMove === "Paper" ? <FontAwesomeIcon icon={faHandPaper} className="noBorder"/> :
             <FontAwesomeIcon icon={faHandScissors} className="noBorder"/>:
             ""
            }</h1>
        </div>
    </div>)

}

export default Players;