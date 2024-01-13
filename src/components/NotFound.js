import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h2>Wybrana strona nie istnieje</h2>
      <p>
        Wróc na <Link to="/">stronę główną</Link>
      </p>
    </section>
  );
};

export default NotFound;
