import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import EnglishCover from "../assets/images/myConversationsWithYou-frontCover.png";

//COMPONENTS

function EnglishBook() {


  return (

        <>
          <section className="singleBooksSection myConversationsWithYou">
            <h1>My conversations with you</h1>

       
          </section>
          <hr className="separatorAppointments" />

          <section className="booksIdSection">
            <div className="upperSingleBook">
              <img src={EnglishCover} alt="Capa do livro em Inglês" className="bookIdImage" />

              <p className="bookIdDescription">This work is fictional and frames a love story, intertwined with life cases treated in the context of therapy, where the doubts of a psychologist are brought to light and treated with the naturalness of someone who knows that the human being is not an exact science and watertight. It is, rather, being in permanent development and in a constant search for answers. Joane believes that in life and death everything is relative, everything except love, and this is the premise that surrounds the entire narrative.</p>
            </div>

            <br />

            <details className="booksIdSection__info">
              <summary>Ver Detalhes</summary>

              <p>Autor: Maria Luísa Silva</p>
              <p>Editora: Temet Nosce</p>
              <p>Data de publicação: Novembro 2022 </p>
              <p>
                Idiomas: EN
                
              </p>
              <p>Páginas: 255</p>
            </details>

            <div>

            </div>
          </section>
        </>
  );
}

export default EnglishBook;
