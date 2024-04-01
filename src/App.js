import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";

function App() {
  const [currentPage,setCurrentPage] = useState(1)
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>[Employees {indexOfFirstItem+1} to {indexOfLastItem}]</h5>
        <List currentItems={currentItems} />
        <div className="btns">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
          <button onClick = {() => setCurrentPage(currentPage+1)} disabled = {indexOfLastItem >= data.length}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
