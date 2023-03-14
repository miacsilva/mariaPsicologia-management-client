//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import bigAbout from "../assets/images/fotoGrandeSobre.jpg";
function About() {
  const { user, logout } = useContext(AuthContext);
  const [about, setAbout] = useState([]);

  const getAbout = async () => {
    try {
      const response = await projectService.getAbout();
      /* console.log(response.data); */
      setAbout(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);
  return (
    <>
      {about.length && (
        <>
          <section className="aboutSection">
            <h1>About {about[0].name}</h1>
            {user && (
              <NavLink to={`/about/edit/${about[0]._id}`}>
                <button className={"editButton"}>Edit About Section</button>
              </NavLink>
            )}
          </section>
          <section className="aboutSectionAbout">
            <img src={bigAbout} alt="" className="aboutPhoto" />

            <h1>About</h1>
            <p>
              {about[0].bigAbout} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Harum, voluptatem alias, quibusdam, dicta
              pariatur sit vel nesciunt ex debitis consequuntur tempora soluta?
              Inventore aliquid harum, autem dolorem dolorum nobis dolores atque
              eos ratione similique vel iusto necessitatibus eveniet laborum
              ipsam. Eius debitis deleniti sunt repudiandae cum perspiciatis
              consequuntur totam, velit ut nobis non nesciunt distinctio, quas
              aut quod fugit, quibusdam necessitatibus! Aliquam labore, facere
              perspiciatis atque eligendi consectetur repellat voluptates eius
              aperiam molestias quos impedit ex quasi adipisci tempora est minus
              repudiandae. Tempora, quod ea veritatis numquam cupiditate quos
              ullam delectus, facilis at error enim! Molestiae sit accusantium
              iste laboriosam unde quod enim sed nostrum placeat, excepturi
              aliquam suscipit, doloremque quibusdam, qui et nisi repellendus.
              Cupiditate eveniet voluptates quia dolor ad, perspiciatis optio
              error aliquam id quis eaque in quae unde fugiat, distinctio
              quisquam! Non odio blanditiis iure fugiat est deleniti porro? Eum,
              laudantium facilis minus tenetur veniam doloribus iusto! Explicabo
              perferendis impedit deserunt eaque accusamus, animi repellat amet.
              Tempora rem quidem non dicta a minus eum inventore veritatis,
              fugiat suscipit reprehenderit distinctio adipisci eligendi earum
              natus ut qui eius. Earum possimus numquam quasi magnam, voluptas
              iusto nam sunt in aspernatur animi tempore, dolores facilis culpa
              deleniti aut id quidem deserunt ullam corporis vitae! Quam aliquid
              laborum voluptate illum inventore, veniam totam voluptatibus sunt,
              deserunt accusamus, consectetur debitis animi ipsum iusto ducimus
              sint sed id reprehenderit mollitia itaque facere cumque? Obcaecati
              nulla enim quisquam harum at explicabo dolorum quidem ullam
              inventore magnam ea dolores deleniti, ab temporibus beatae error
              optio ducimus nihil, ipsa velit! Minus similique cupiditate eos
              doloremque? Sint nam eligendi quam expedita repellat accusantium
              consequuntur facere quaerat ipsum officiis accusamus tempora,
              praesentium commodi! Reiciendis nisi dolor in sit. Eos facilis non
              reiciendis recusandae in fugit mollitia debitis ducimus veniam
              provident ipsum sequi, voluptatibus exercitationem quidem, animi
              quos alias similique ratione hic nihil consequatur amet! Minus
              veniam quasi esse enim voluptate sapiente ipsa exercitationem
              ipsam recusandae, ipsum eius sint sit, corporis saepe. Labore illo
              eaque ducimus culpa nobis. Ratione nesciunt asperiores nulla ex
              doloremque eius dolore et eos quas, facilis molestiae quis,
              expedita, nam accusantium sapiente vero? Pariatur veniam eligendi
              id corporis non incidunt, eos tempora aut, sequi soluta labore
              rerum ullam, iure libero aspernatur porro laboriosam quae unde
              laborum ipsam quo nemo numquam! Ducimus nihil dicta ipsa quo
              atque? Maxime at provident amet tempore illum inventore delectus
              molestias. Quidem expedita ratione aliquam minus sed voluptatem
              ullam vitae! Minus magnam adipisci, laudantium perferendis velit
              facere voluptatum earum excepturi aspernatur dolore totam maiores
              fuga labore assumenda molestiae numquam delectus officia tempore
              error reprehenderit eum? Atque in omnis similique tenetur
              perferendis repellat ut repellendus molestias voluptate, ratione a
              fugit labore earum nam provident dolor ullam aut illo ducimus?
              Dolore, officiis labore, eaque accusantium ea perspiciatis
              obcaecati autem veritatis doloribus eum, aperiam quasi? Maiores
              quos optio suscipit eos nemo mollitia, veritatis perferendis
              officiis voluptates cum facere minima nostrum, deserunt sequi.
              Dolore, quasi. Id quibusdam hic quisquam ab adipisci quae cum
              optio. Quidem, eius adipisci perspiciatis rem nostrum ab obcaecati
              facere. Dignissimos, repudiandae.
            </p>
          </section>
          <section className="aboutSectionEducation">
            <h1>Education</h1>
            <p>{about[0].education}</p>
          </section>
        </>
      )}
    </>
  );
}

export default About;
