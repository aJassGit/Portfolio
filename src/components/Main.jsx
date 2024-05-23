/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap"
import iconC from "../assets/icons/icon-c.png"
import iconCC from "../assets/icons/icon-cc.png"
import iconJS from "../assets/icons/icon-js.png"
import iconLara from "../assets/icons/icon-lara.png"
import iconPhp from "../assets/icons/icon-php.png"
import iconPython from "../assets/icons/icon-python.png"

const Main = (props) => {
  return (
    <div className="main">
      <div className="bg-img">

      </div>


      <div>
        <p>Mi nombre es {props.persona.nombre}, tengo {props.persona.edad} años y soy {props.persona.ocupacion}.<br />
          Desde chico fui muy curioso y, como tuve contacto con la informática desde temprana edad, me fueron 
          surgiendo dudas al respecto de cómo se hacían los programas y todas las funcionalidades que estos 
          tienen. Lo que me dió por conocer la programación.</p>
        <p className="d-flex justify-content-center">Los lenguajes que utilizo son:</p>
        <Row className="d-flex justify-content-center">
          <Col md={6} className="own-card"><img src={iconC} /><figcaption>Lenguaje C</figcaption></Col>
          <Col md={6} className="own-card"><img src={iconCC} /><figcaption>Lenguaje C#</figcaption></Col>
          <Col md={6} className="own-card"><img src={iconJS} /><figcaption>Lenguaje JavaScript</figcaption></Col>
          <Col md={6} className="own-card"><img src={iconPython} /><figcaption>Lenguaje Python</figcaption></Col>
          <Col md={6} className="own-card"><img src={iconPhp} /><figcaption>Lenguaje PHP</figcaption></Col>
          <Col md={6} className="own-card"><img src={iconLara} /><figcaption>Framework Laravel de PHP</figcaption></Col>
        </Row>
      </div>
    </div>
  )
}

export default Main