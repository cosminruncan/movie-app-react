import React from "react";
import Result from "./Result";

function Results({ results, openDetail }) {
  return (
    <section className="results">
      {typeof results != "undefined" ? (
        results.map((result) => (
          <Result key={result.imdbID} result={result} openDetail={openDetail} />
        ))
      ) : (
        <div className="not-found">
          <h2>Whoops!... movie not found.</h2>
          <h2>Try changing the input or search for another movie.</h2>
        </div>
      )}
    </section>
  );
}

export default Results;
