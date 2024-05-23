import {Row,Col} from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {

  return (
    <div className="footer">
      <Row className='col-div d-flex justify-content-around align-items-center'>
        <Col><h3>Todos los derechos reservados ©</h3></Col>
        <Col>
        <a href="https://www.facebook.com/alanjassan/"><FaFacebook className="icono fb-icon"/></a>
        <a href="https://wa.link/im2exu"><FaWhatsappSquare className="icono wp-icon"/></a>
        <a href="mailto:alanjassan@hotmail.com"><IoMdMail className='icono mail-icon'/></a>
        </Col>
      </Row>
      
    </div>
  )
}

export default Footer