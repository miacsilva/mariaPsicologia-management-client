import React from "react";
import fotoSobre from "../assets/images/sobre.jpg";

function AboutHome() {
  return (
    <section className="aboutSection">
      <div className="aboutSectionOne">
        <img src={fotoSobre} alt="" className={"photoAbout"} />
      </div>
      <div className="aboutSectionTwo">
        <h1>Sobre</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, inventore
          tempora fugiat at iusto maxime eos provident perspiciatis est facere
          debitis minima incidunt commodi vel! Corporis veniam aliquam
          exercitationem corrupti commodi magni reiciendis ullam iste debitis
          aut asperiores autem numquam animi sequi velit dolorum doloremque
          explicabo est esse rem, optio perferendis consequuntur qui placeat!
          Quidem magni qui iste et est fugiat expedita repudiandae, nihil
          voluptatem vel itaque vitae a. Nam, ratione quae nesciunt dolorum
          laboriosam modi pariatur, quis veniam saepe, natus voluptates eveniet.
          Maiores, non quae maxime possimus asperiores numquam quam a eius
          temporibus eveniet sit, atque molestias doloremque quas.
        </p>
      </div>
    </section>
  );
}

export default AboutHome;
