import React, { useState, useEffect } from "react"
import axios from "axios"

import NavBar from "./views/NavBar"
import FilterView from "./views/FilterView"
import ResultView from "./views/ResultView"
import RenderAll from "./views/RenderAll"
import SendRequest from "./views/SendRequest"

function App() {
  const [data, setData] = useState([])
  const [resultView, setResultView] = useState({}) 
  const [reciveAddPlaceModule, setReciveAddPlaceModule] = useState() 

  const sendFilterObj = (sendFilterObj) => {
    setResultView(sendFilterObj)
  }

  const sendAddPlaceModule = (sendAddPlaceModule) => {
    setReciveAddPlaceModule(sendAddPlaceModule)
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "https://main-heroku-server.herokuapp.com/api-all",
    }).then((response) => {
      setData(response.data)
    }).catch((err) => {
      setData(err)
    })
  }, [])

  return (
    <div className="main-app">
      <NavBar reciveAddPlaceModule={reciveAddPlaceModule} sendAddPlaceModule={sendAddPlaceModule} />

      {
        reciveAddPlaceModule ? 

        (
          <SendRequest />
        )

        :

        (
          <nav>
            <FilterView sendFilterObj={sendFilterObj} />
            <ResultView resultView={resultView} data={data} />
            <RenderAll  data={data} />
          </nav>
        )
      }
    </div>
  )
}

export default App