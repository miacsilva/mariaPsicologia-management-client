//PACKAGES
import { useState, useEffect } from "react";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function Books() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    try {
      const response = await projectService.getAllBooks();
      /* console.log(response.data); */
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <>
      {books.length && (
        <>
          <section className="booksSection">
            <h1>Books {books[0].title}</h1>
          </section>
        </>
      )}
    </>
  );
}

export default Books;
