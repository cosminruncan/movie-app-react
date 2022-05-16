import React from "react";

function Result({ result, openDetail }) {
  return (
    <div className="result" onClick={() => openDetail(result.imdbID)}>
      <img src={result.Poster} alt="Imagine" />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Result;