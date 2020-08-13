import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

const AddMovieForm = () => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: [""],
  });
  const {push} = useHistory();

  const addMovie = () => {
    axios
      .post("http://localhost:5000/api/movies", movie)
      .then((res) => push("/"));
  };

  const handleChanges = (e) => {
    e.persist();
    if (e.target.name === "metascore") {
      e.target.value = parseInt(e.target.value);
    }

    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie();
  };
  return (
    <>
      <h2>Add Movie Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChanges}
            placeholder="Title"
          />
        </div>

        <div>
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={handleChanges}
            placeholder="Director"
          />
        </div>

        <div>
          <input
            type="number"
            name="metascore"
            value={movie.metascore}
            onChange={handleChanges}
            placeholder="Metascore"
          />
        </div>

        <div>
          <input
            type="text"
            name="stars"
            value={movie.stars}
            onChange={handleChanges}
            placeholder="Actors - separate with a comma"
          />
        </div>

        <button>Add Movie</button>
      </form>
    </>
  );
};

export default AddMovieForm;
