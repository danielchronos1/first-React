import React from "react";

function Address({ id, street, suite, city, zipcode }) {
  return (
    <div key={`Address-${id}`}>

      <p>{street}</p>
      <p>{suite}</p>
      <p>{city}</p>
      <p>{zipcode}</p>
    </div>
  );
}
export default Address;