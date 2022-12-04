import axios from "axios";
import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.css'
function Addnote() {
  const [body, setbody] = useState("");

  const Addnotes = async () => {
    let formfield = new FormData();

    formfield.append("body", body);

    console.log(setbody);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/",
      data: formfield,
    }).then((response) => alert("your data is posted"));

    setbody("");
  };

  return (
    <div className="">
      <div className="lfa">
        <header>
          <Link to ="/">
            <AiOutlineLeft size={30} />
          </Link>
        </header>
      </div>
      <center>
        <div className="">
          <textarea
            placeholder="enter your text here"
            // rows={10}
            cols={50}
            value={body}
            onChange={(e) => setbody(e.target.value)}
          ></textarea>


        </div>

        <button onClick={Addnotes} className="btn btn-primary">
          submit
        </button>
      </center>
    </div>
  );
}

export default Addnote;
