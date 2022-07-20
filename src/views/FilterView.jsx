import React, { useState, useEffect } from "react"

const FilterView = ({ sendFilterObj }) => {

  const [filterObj, setFilterObj] = useState({
    type: "",
    temperature: "",
    flight: ""
  })

  const onValueChange = (e) => {
    setFilterObj({
      ...filterObj,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    sendFilterObj(filterObj)
  }, [filterObj])

  return (
    <div className="main-filter-view">
      <div className="main-filter-view-one">
        <p>This year we're going to...</p>
      </div>

      <div className="main-filter-view-two">
        <div>
          <p>TYPE</p>

          <label>
            <input 
              type="radio"
              name="type" 
              value="Adventure"
              checked={filterObj.type === "Adventure"}
              onChange={onValueChange}
            />
            <span>Adventure</span>
          </label>

          <label>
          <input 
              type="radio"
              name="type" 
              value="Beach"
              checked={filterObj.type === "Beach"}
              onChange={onValueChange}
            />
            <span>Beach</span>
          </label>

          <label>
          <input 
              type="radio"
              name="type" 
              value="City"
              checked={filterObj.type === "City"}
              onChange={onValueChange}
            />
            <span>City</span>
          </label>

          <label>
          <input 
              type="radio"
              name="type" 
              value="Ski"
              checked={filterObj.type === "Ski"}
              onChange={onValueChange}
            />
            <span>Ski</span>
          </label>
        </div>

        <div>
          <p>TEMPERATURE</p>

          <label>
            <input 
              type="radio"
              name="temperature" 
              value="Hot"
              checked={filterObj.temperature === "Hot"}
              onChange={onValueChange}
            />
            <span>Hot</span>
          </label>

          <label>
          <input 
              type="radio"
              name="temperature" 
              value="Cold"
              checked={filterObj.temperature === "Cold"}
              onChange={onValueChange}
            />
            <span>Cold</span>
          </label>

          <label>
          <input 
              type="radio"
              name="temperature" 
              value="Temperate"
              checked={filterObj.temperature === "Temperate"}
              onChange={onValueChange}
            />
            <span>Temperate</span>
          </label>
        </div>

        <div>
          <p>FLIGHT</p>

          <label>
          <input 
              type="radio"
              name="flight" 
              value="Long"
              checked={filterObj.flight === "Long"}
              onChange={onValueChange}
            />
            <span>Long</span>
          </label>

          <label>
          <input 
              type="radio"
              name="flight" 
              value="Medium"
              checked={filterObj.flight === "Medium"}
              onChange={onValueChange}
            />
            <span>Medium</span>
          </label>

          <label>
          <input 
              type="radio"
              name="flight" 
              value="Short"
              checked={filterObj.flight === "Short"}
              onChange={onValueChange}
            />
            <span>Short</span>
          </label>
        </div>
      </div>

      <div className="main-filter-view-three">
        <button onClick={() => {setFilterObj({})}} className="main-filter-view-three-b2">Clear Filters</button>
      </div>
    </div>
  )
}

export default FilterView