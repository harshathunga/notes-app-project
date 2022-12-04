import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
function Note() {
  const [body, setbody] = useState("");

  const { id } = useParams();

  const Loaddata = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    // console.log(data);
    setbody(data.body);

  };

  useEffect(() => {
    Loaddata();
  }, []);

  const Addnotes = async () => {
    let formfield = new FormData();

    formfield.append("body", body);

    await axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/api/${id}/`,
      data: formfield,
    }).then((response) => alert("your data is updated "));
  };
  return (
    <div>
      <div className="lfa">
        <header>
          <Link onClick={Addnotes} to="/">
            <AiOutlineLeft size={30} />
          </Link>
        </header>
      </div>
      <center>
        <div className="">
          <textarea
            placeholder="enter your text here"
            rows={26}
            cols={90}
            value={body}
            onChange={(e) => setbody(e.target.value)}
          ></textarea>
        </div>

        {/* <button onClick="" className="btn btn-primary">
          submit
        </button> */}
      </center>
    </div>
  );
}

export default Note;
