import { Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Chat from './Pages/Chat'

function App() {

  return (
    <>
       <Route path='/' component = {Home} exact/>
       <Route path='/chats' component = {Chat}/>
    </>
  )
}

export default App
