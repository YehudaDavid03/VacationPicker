import React, { useState, useEffect } from "react"

const CardComp = ({ key, image, title, summary, type, temperature, flight }) => {
  return (
    <div key={key} className="main-card-comp">
      <div style={{backgroundImage: `url(${image})`}} className="main-card-comp-img"></div>

      <div className="main-card-comp-info">
        <h2>{title}</h2>

        <nav>
          <h5><span className="material-symbols-rounded">sell</span>{type}</h5>
          <h5><span className="material-symbols-rounded">sell</span>{temperature}</h5>
          <h5><span className="material-symbols-rounded">sell</span>{flight}</h5>
        </nav>
      </div>
    </div>
  )
}

export default CardComp