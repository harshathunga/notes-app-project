import React,{useEffect, useState} from 'react'

function Movie() {
    const [note,setNote] = useState([]);
    useEffect(() => {
        const url = "https://api.themoviedb.org/3/movie/550?api_key=822bec26d0673cb05124b48acf15bbd4";
        fetch(url)
          .then((resp) => resp.json())
          .then((res) => setNote(res));
      }, []);
  return (
    <div>
        {
            note.map((e,)=>{})
        }
    </div>
  )
}

export default Movie