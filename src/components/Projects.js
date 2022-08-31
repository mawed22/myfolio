import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/laravel/project-img1.PNG";
import projImg2 from "../assets/img/laravel/project-img2.png";
import projImg3 from "../assets/img/laravel/project-img3.png";
import projImg4 from "../assets/img/laravel/project-img4.PNG";
import projImg5 from "../assets/img/wordpress/wordpress1.png";
import projImg6 from "../assets/img/wordpress/wordpress2.png";
import projImg7 from "../assets/img/wordpress/wordpress3.png";
import projImg8 from "../assets/img/wordpress/wordpress4.png";
import projImg9 from "../assets/img/wordpress/wordpress5.png";
import projImg10 from "../assets/img/wordpress/wordpress6.png";
import projImg11 from "../assets/img/wordpress/wordpress7.png";
import projImg12 from "../assets/img/wordpress/wordpress8.png";
import projImg13 from "../assets/img/nodejs/node1.PNG";
import projImg14 from "../assets/img/nodejs/node2.PNG";
import projImg15 from "../assets/img/nodejs/nodejs3.png";
import projImg16 from "../assets/img/nodejs/node4.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projetlararvel = [
    {
      link : "https://github.com/mawed22/",
      title: "API Rest ",
      description: "API avec Laravel 8 - 2022",
      imgUrl: projImg1,
    },
    {
      link : "https://premiumcare.cm/",
      title: "Premium Care",
      description: "Site & application de gestion - 2021",
      imgUrl: projImg3,
    },
    {
      link : "#",
      title: "Blog avec Laravel 8",
      description: "En cours de réalisation - 2022",
      imgUrl: projImg2,
    },
    {
      link : "https://github.com/mawed22/",
      title: "CRUD avec Laravel 8",
      description: "Laravel 8 - 2021",
      imgUrl: projImg4,
    },
  ];

  const projetwordpress = [
    {
      link : "https://digitalosconsulting.com/",
      title: "Digitalos-Consulting",
      description: "Site Vitrine & Blog - 2022",
      imgUrl: projImg5,
    },
    {
      link : "https://iplaschool.com/",
      title: "Ipla School",
      description: "Plateforme de e-learning - 2021",
      imgUrl: projImg10,
    },
    {
      link : "https://hdcom.cm/",
      title: "HDcom Sarl",
      description: "Site de e-commerce - 2022",
      imgUrl: projImg8,
    },
    {
      link : "https://goovenpad.com/",
      title: "Goovenpad",
      description: "Site vitrine & Blog - 2021",
      imgUrl: projImg7,
    },
    {
      link : "https://legalimmo.cm/opensuku/",
      title: "OpenSuku",
      description: "Plateforme de e-learning & blog - 2022",
      imgUrl: projImg11,
    },
    {
      link : "https://legalimmo.cm/simbah/",
      title: "Simbah",
      description: "Site de e-commerce - 2022",
      imgUrl: projImg12,
    },
    {
      link : "https://floreservices.com/",
      title: "Flore Services Sarl",
      description: "Site vitrine & Blog - 2021",
      imgUrl: projImg6,
    },
    {
      link : "https://hotelmartino-bertoua.com/",
      title: "Hôtel Martino",
      description: "Site vitrine - 2021",
      imgUrl: projImg9,
    },
  ];

  const projetnodejs = [
    {
      link : "#",
      title: "CV Bulder avec React et Node JS ",
      description: "En cours de réalisation - 2022",
      imgUrl: projImg15,
    },
    {
      link : "https://github.com/mawed22/Api_Nodejs",
      title: "API Rest",
      description: "API avec Node JS - 2022",
      imgUrl: projImg13,
    },
    {
      link : "https://mawed22.github.io/myfolio",
      title: "MYFOLIO",
      description: "Portefolio avec React JS - 2022",
      imgUrl: projImg16,
    },
    {
      link : "https://github.com/mawed22/CRUD-averc-ReactJS",
      title: "CRUD avec React JS",
      description: "React JS - 2022",
      imgUrl: projImg14,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Mes Réalisations</h2>
                <p>Vous trouverez ici quelques unes de mes réalisations: des sites vitrine, e-commerce, e-learning, blog, des applications web, des API Rest, vous trouverez également des projets en cours de conception.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Wordpress</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Laravel</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Node JS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projetwordpress.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       <Row>
                        {
                          projetlararvel.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    {
                      projetnodejs.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
