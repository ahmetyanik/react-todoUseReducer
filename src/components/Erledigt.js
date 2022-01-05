import React from "react";
import "../style/erledigt.scss";

function Erledigt({ state }) {


  return (

    <div>
    
       <h3 className="text-light text-center">Completed</h3> 
    
    <div className="d-flex justify-content-center align-items-center flex-column">
      
      {state.map((todo, index) => {

        return todo.erledigt === true ? (
          <ul key = {index} className="text-light">
            <li style={{listStyle:"none"}} className="bg-success p-1 rounded"><div>{todo.message}</div> <hr/> <div>Completed Date: {todo.completedDate}</div></li>
          </ul>
        ) : null;
      })}
    </div>
    </div>
  );
}

export default Erledigt;
