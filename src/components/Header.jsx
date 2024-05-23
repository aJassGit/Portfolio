import {Row,Col} from 'react-bootstrap'
import Photo from './child/HeaderPhoto'

const Header = () => {
  return (
    <div className='header'>
        <Row>
          <Col><Photo/></Col>
          <Col className='detail'><h1>Alan Jassán</h1>
          <h5 className='sub'>- Programador Junior -</h5></Col>
        </Row>
    </div>
  )
}

export default Header