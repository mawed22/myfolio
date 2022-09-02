import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import './Button.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Développeur Full Stack😃", "Intégrateur WordPress😉", "Infographe😎" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={9}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenue sur mon portfolio</span>
                <h1>{`Salut! Je suis Moustapha`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Développeur Full Stack😃", "Intégrateur WordPress😉", "Infographe😎" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Je suis développeur Full Stack avec plus de 2 ans d'expérience, je code avec Laravel et Node JS pour le backend, avec React JS et Bootstrap pour le Frontend, pour les bases de données j'utilise MongoDB ou MySQL. 
                  Je travaille également avec Wordpress (site vitrine, e-commerce, e-learning...). 
                  Je maîtrise également les techniques d’analyse et de modélisation de différents projets informatiques.</p>
                  {/*<button onClick={() => console.log('connect')}>Contactez-moi <ArrowRightCircle size={25} /></button>*/}
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                  <a href="Foupoua_Mohamed_CV.pdf" download={'Foupoua_Mohamed_CV.pdf'}><button>Mon CV<ArrowRightCircle size={25} /></button></a>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
