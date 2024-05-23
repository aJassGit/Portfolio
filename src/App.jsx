import Home from './pages/Home'

function App() {

  const Persona  = {
    nombre: 'Alan',
    apellido: 'Jassan',
    edad: '23',
    ocupacion: 'estudiante en la carrera de programación en la UTN',
    lenguajes: {
      lang1: 'C',
      lang2: 'C#',
      lang3: 'JavaScript',
      lang4: 'Python',
      lang5: 'PHP',
      lang6: 'Larabel'
    }
  }

  return (
    <>
      <Home persona = {Persona}/>
    </>
  )
}

export default App
