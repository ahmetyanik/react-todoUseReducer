import React from "react";

function NichtErledigt({ state }) {

console.log(state);

  return (
    <div>
      <h3 className="text-light text-center">Not Completed</h3>
      <div className="d-flex justify-content-center align-items-center flex-column flex-wrap">
        {state.map((todo, index) => {


        return todo.erledigt === false ? (
          <ul key = {index} className="text-light">
            <li style={{listStyle:"none"}} className="bg-danger p-1 rounded"><div>{todo.message}</div> <hr/> <div>Created Date: {todo.createdDate}</div></li>
          </ul>
        ) : null;
      })}
      </div>
    </div>
  );
}

export default NichtErledigt;
