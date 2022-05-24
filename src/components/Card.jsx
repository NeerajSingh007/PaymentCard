import React from 'react'
import "./card.css"



const Card = () => {

    function Details(props) {
        return ( 
    <div className="con" style={{ backgroundColor: `${props.bgColor}` }}>
             <div className="logo">
                   <p className="Date">{props.dates}</p>
                   <img className="img" src={props.logo} alt="logo" />
             </div>
             
             <div className="case">
               Case Study
             </div>

             <div className="compi">
                 
                  <h1 className="brandname" >{props.title}</h1>
                  <h1 className="method">{props.cards}</h1>
                  <div    >
                   <h4 className="andriod">{props.brand}</h4>
                   <p className="arrow">⟶</p>
                   </div>
             </div>
    </div>
      )
      }


  return (
    <div>
        <Details bgColor="orange" dates="28/10/2020" title="Amazon Gift"  cards=" Pay" brand="Desktop-Mobile" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"/>
        <Details bgColor="silver"  dates="17 Sep 2020" title="Apple Gift" cards=" Payment" brand="MacOS-Mobile" logo="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"/> 
    </div>
    
  )
}

export default Card;
