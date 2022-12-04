import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Addnote from "./components/Addnote";
import All from "./components/All";

import Movie from "./components/Movie";
import Note from "./components/Note"


function App() {
  return (
    <div className="App">
   
      <Router>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fake" element={<Movie />} />
           <Route path="/add" element={<Addnote/>} />
          <Route path="/:id/" element={<Note/>} />
        {/*<Route path="/:id/update" element={<Proupdate/>} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
