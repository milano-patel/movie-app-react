const movieContainer = ({ movieData, search }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const ratingColor = (votes) => {
    if (votes >= 7.5) {
      return 'green';
    } else if (votes < 7.5 && votes >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const renderedMovies = movieData.map(
    ({ title, poster_path, vote_average, overview, id }) => (
      <div className="movie" key={id}>
        <img src={IMG_PATH + poster_path} alt="" />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={ratingColor(vote_average)}>{vote_average}</span>
        </div>
        <div className="overview">
          <h3>Overview</h3>
          {overview}
        </div>
      </div>
    )
  );

  return (
    <>
      <h3 className="heading">
        {search ? `Search Results for : "${search}"` : 'Most Popular now'}
      </h3>
      <main id="main">{renderedMovies}</main>
    </>
  );
};

export default movieContainer;

//Search Results for <span className="search-text"> ${search}</span>
