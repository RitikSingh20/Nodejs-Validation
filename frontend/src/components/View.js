import React from 'react'
import { Link } from "react-router-dom";
import temp1 from "./images/temp1.png"
import temp3 from "./images/temp3.png"
import last from "./images/last.png"



function View() {

  return (
    <div>
          <div style={{ width: "400px", border: "2px solid black", height: "60px", display: "flex", justifyContent: "center", margin: "auto", marginTop: "40px", backgroundColor: "#e5b73b" }}>
        <h2 style={{ padding: "10px" }}>CHOOSE TEMPLATE</h2>
      </div>
      <div style={{display: "flex",flexDirection: "row" ,justifyContent:"center",alignItems:"center" , marginTop:"5rem",border:"5px #ffcc33 outset",marginRight:"5rem",marginLeft:"5rem",backgroundColor:"gray"}}>
        <div className="card" style={{ width: "18rem" ,height:"15rem", margin:"6rem",border:"3px #e5b73b solid",overflow:'hidden'}}>
          <img className="card-img-top" src={ temp1} height="100" width="50" alt="Cardimage cap" />
          <div className="card-body">
            <Link to='/templates'><button type="button" className="btn btn-warning">TEMPLATE 1</button></Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" ,height:"15rem", margin:"6rem",border:"3px #e5b73b solid",overflow:'hidden'}}>
          <img className="card-img-top" src={ temp3 } height="100" width="50" alt="Cardimage cap" />
          <div className="card-body">
            <Link to='/temp2'><button type="button" className="btn btn-warning">TEMPLATE 2</button></Link>
          </div>

        </div>
        <div className="card" style={{ width: "18rem" ,height:"15rem", margin:"6rem",border:"3px #e5b73b solid",overflow:'hidden'}}>
          <img className="card-img-top" src={last} height="100" width="50" alt="Cardimage cap" />
          <div className="card-body">
            <Link to='/temp3'><button type="button" className="btn btn-warning">TEMPLATE 3</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View;
