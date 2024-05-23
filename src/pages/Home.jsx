/* eslint-disable react/prop-types */
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
const Home = (props) => {
    
    return (
        <div className='divisor'>
        <Header/>
        <Main persona = {props.persona} icons = {props.icons}/>
        <Footer/>
        </div>
    )
}

export default Home