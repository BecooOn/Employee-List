import React from "react";

const List = ({ currentItems }) => {
  return (
    <>
      <article className="person">
        {currentItems.map((person) => (
          <div key={person.id} className="eachPerson">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.email}</p>
              <p>{person.age} years</p>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default List;
