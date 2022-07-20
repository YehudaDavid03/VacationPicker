import React, { useState, useEffect } from "react"

const NavBar = ({ reciveAddPlaceModule, sendAddPlaceModule }) => {
  const [addPlaceModule, setAddPlaceModule]  = useState(false)

  useEffect(() => {
    sendAddPlaceModule(addPlaceModule)
  }, [addPlaceModule])

  return (
    <div className="main-nav-bar">
      <div>
        <span className="material-symbols-rounded">flight_takeoff</span>
        <p>Time to Have More Fun</p>
      </div>
      
      <button onClick={() => {setAddPlaceModule(!addPlaceModule)}}>{reciveAddPlaceModule ? "Go Back" : "Add Place"}</button>
    </div>
  )
}

export default NavBar