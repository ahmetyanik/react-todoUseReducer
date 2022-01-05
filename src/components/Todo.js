import React from "react";

function Todo({element,index,dispatch}) {

  const date = new Date();

  const completedDate = date.toLocaleString();

  return (
    <div className="m-2">
      <div className="card" style={{minWidth:"250px"}}>
        <h5
          className={`card-header text-light ${
            element.erledigt ? "bg-success" : "bg-danger"
          }`}
        >
          {element.erledigt ? "Completed" : "Not Completed"}
        </h5>
        <div className="card-body ">
          <div className="d-flex justify-content-center">
            <p className="card-text text-wrap">
              {index + 1}- {element.message}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <button
              onClick={()=> dispatch({type :"toggle", payload:{index:index,completedDate:completedDate}})}
              index={index}
              id="erledigt"
              className={`d-flex justify-content-around btn btn-primary text-light  ${
                element.erledigt ? "bg-light" : "bg-success"
              }`}
            >
              {element.erledigt ? "❌" : "✔"}
            </button>

            <button
              onClick={()=>dispatch({type:"delete", payload:{index:index}})}
              index={index}
              className="btn btn-dark ms-1"
            >
              🗑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
