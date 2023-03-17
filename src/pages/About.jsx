//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service"; /* 
import bigAbout from "../assets/images/fotoGrandeSobre.jpg"; */
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
          <section className={"aboutSection"}>
            <h1>About {about[0].name}</h1>
            {user && (
              <NavLink to={`/about/edit/${about[0]._id}`}>
                <button className={"editButton"}>Edit About Section</button>
              </NavLink>
            )}
          </section>
          <hr className="separatorAppointments" />
          <section className="aboutSectionAbout">
            <img
              src={about[0].imageAbout}
              alt={about[0].name}
              className="aboutPhoto"
            />

            <h1>About</h1>
            <p>
              {about[0].bigAbout} 
            </p>
          </section>
          <section className="aboutSectionEducation">
            <h1>Education</h1>
            {/* <p>{about[0].education}</p> */}
            <ul>
              <li>
                Psicóloga, membro efetivo da ordem de Psicólogos Portugueses com
                a cédula profissional nº026216.
              </li>
              <li>Mestrado Integrado Psicologia Universidade do Minho</li>
              <li>
                Certificado Hipnose Clinica London College Clinical Hypnosis
              </li>
              <li>
                Pós Graduação Hipnose Clinica Experimental Faculdade Medicina
                Lisboa{" "}
              </li>
              <li>
                Dupla Graduação de NeuroPsicologia Clinica no Instituto
                Português Psicologia no Porto
              </li>
              <li>
                Dupla Graduação de sexualidade Clinica e Terapia de Casal
                Instituto Português Psicologia no Porto
              </li>
              <li>Curso de Desenvolvimento Espiritual</li>
            </ul>
            The Arthur Findlay College. Congressos e participações:
            <ul>
              <li>
                Neuropsicofarmacologia da Criança e do Adolescente” INSPSIC
              </li>
              <li>Neuropsicofarmacologia Do Adulto” - INSPSIC</li>
              <li>
                3ª Jornada de Criminologia: A importância da existência de
                respostas para a diversidade de questões e paradigmas criminais
                , Universidade Fernando Pessoa-Porto
              </li>
              <li>
                Curso de Neurodesenvolvimento e Pedopsiquiatria, Escola De
                Ciências da Saúde da Universidade do Minho
              </li>
              <li>
                1º Congresso Internacional de Parentalidade, do Instituto de
                Psicologia e Neupsicologia do Porto
              </li>
              <li>
                “Saídas profissionais e contextos de futuro em Psicologia”,
                proferida pelo Sr. Bastonário da Ordem dos Psicólogos
                Portugueses, na Faculdade de Psicologia da Educação Universidade
                do Porto.
              </li>
              <li>
                III Seminário de Investigação em Psicologia da Universidade Do
                Minho
              </li>
              <li>Avaliação de Famílias em Risco</li>
              <li>Universidade Católica Portuguesa Braga</li>
              <li>
                II Congresso de Psicologia de Estarreja "Pelos Trilhos da
                Infância e da Adolescência"
              </li>
              <li>
                IV Seminário de Investigação em Psicologia da Universidade Do
                Minho-06/2013.
              </li>
              <li>
                Curso em Análise de Contos de Fadas - CRIAP — ”Violência
                Doméstica ”
              </li>
              <li>Associação de Investigação e Debate em Serviço Social</li>
            </ul>
          </section>
        </>
      )}
    </>
  );
}

export default About;
