const MovieCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img
        className="poster"
        src="https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        height="200"
        width="100"
      />
      <div className="meta">
        <strong>{props.movieObj.title}</strong>
        <p>{props.movieObj.genere}</p>
        <p>{props.movieObj.duration}</p>
        <p>{props.movieObj.language}</p>
        <p>{props.movieObj.cast.join(",")}</p>
      </div>
      <div className="rating">★ {movie1.avgRating}</div>
    </div>
  );
};
