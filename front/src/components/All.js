import React, { useEffect, useState } from "react";
import axios from "axios";

import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.css'

function All() {
  const [note, setNote] = useState([]);

  const {id} = useParams();

  const deletenote = async (id) =>{
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
    alert("product is deleted refesh the page");
  }

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/";
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => setNote(res));
  }, []);

  
  return (
    <div className="container">
      <div className="icons">
        <center>
          <Link to="/add">
            <BsFillPlusCircleFill size={40} />
          </Link>
          <div id="len"> no. of notes:- {note.length}</div>
        </center>
      </div>

     

      {
        note.length === 0 ? (<h2> no  notes please add</h2>) :

      note.map((e,) => (
        <center>
          <div  className="row">
            <ul id="ul">
              <Link to={`/${e.id}/`}>
                <li id="li">
                  {e.body.substr(0, 70)}
                  <Link onClick= {() => deletenote(e.id)} to="/">
                    <AiFillDelete size={30} />
                  </Link>

                  <Link to="#">{/* <AiOutlineEdit size={30} /> */}</Link>
                </li>
              </Link>
            </ul>

            {/* <Card id="marg" style={{}}>
            <Card.Body>
              <Card.Text>{e.body.substr(0, 70)}</Card.Text>
              <Link to="#">
                <AiFillDelete size={30} />
              </Link>

              <Link to="#">
                <AiOutlineEdit size={30} />
              </Link>
            </Card.Body>
          </Card> */}
          </div>
        </center>
      ))}
    </div>
  );
}

export default All;
