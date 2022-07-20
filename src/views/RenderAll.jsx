import React, { useState, useEffect } from "react"
import CardComp from "../components/CardComp"

const RenderAll = ({ data }) => {
  return (
    <div className="main-render-all">
      <p>Places we want to go</p>

      <div>
        {
          data?.map((item, index) => {
            return (
              <CardComp
                key={item._id}
                image={item.image}
                title={item.title}
                summary={item.summary}
                type={item.type}
                temperature={item.temperature}
                flight={item.flight + " Flight"}
               />
            )
          })
        }
      </div>
    </div>
  )
}

export default RenderAll