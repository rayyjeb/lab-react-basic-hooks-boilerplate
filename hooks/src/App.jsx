import { useContext, useState } from 'react'
import './App.css'
import Content from './Components/Content'
import Context from './Components/Context'


function App() {
return(
  <div>

    <Context>
        <Content/>
    </Context>
  </div>
)
}

export default App