import React, { useState, useEffect } from "react"
import axios from "axios"

const SendRequest = () => {
  const [sendReqToEmail, setSendReqToEmail] = useState({
    email: "",
    image: "",
    title: "", 
    summary: "",
    type: "",
    temperature: "",
    flight: ""
  })


  const handleChange = (e) => {
    setSendReqToEmail({
      ...sendReqToEmail,
      [e.target.name]: e.target.value
    })
  }

  const validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true; 
    } else {
      return false; 
    }
  }

  const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i')
    return !!pattern.test(str)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(sendReqToEmail.email) && validURL(sendReqToEmail.image) && sendReqToEmail.title.length > 3 && sendReqToEmail.summary.length > 6 && sendReqToEmail.type.length > 0 && sendReqToEmail.temperature.length > 0 && sendReqToEmail.flight.length > 0) {
      axios({
        method: "post",
        url: "http://70.23.96.219:8080/request-add-spot",
        data: {
          email: sendReqToEmail.email,
          image: sendReqToEmail.image,
          title: sendReqToEmail.title,
          summary: sendReqToEmail.summary,
          type: sendReqToEmail.type,
          temperature: sendReqToEmail.temperature,
          flight: sendReqToEmail.flight
        },
      })
      .then((res) => { 
        // console.log(res)
      })
      .catch((err) => {
        // console.log(err)
      })

      setSendReqToEmail({
        email: "",
        image: "",
        title: "", 
        summary: "",
        type: "",
        temperature: "",
        flight: ""
      })
      alert("Post Is Pending Approval")
    } else {
      alert("Please Input Valid Information")
    }
  }

  return (
    <div className="main-send-request">

      <input 
        type="email"
        name="email"
        value={sendReqToEmail.email}
        placeholder="Email"
        onChange={handleChange}
      />

      <input 
        type="url"
        name="image"
        value={sendReqToEmail.image}
        placeholder="Image URL"
        onChange={handleChange}
      />
      
      <input 
        type="text"
        name="title"
        value={sendReqToEmail.title}
        placeholder="Title"
        onChange={handleChange}
      />
      
      <textarea type="text" name="summary" value={sendReqToEmail.summary} placeholder="Write a summary..." onChange={handleChange} ></textarea>
      
      <select name="type" value={sendReqToEmail.type} onChange={handleChange}>
      <option value="">Type</option>
        <option value="Adventure">Adventure</option>
        <option value="Beach">Beach</option>
        <option value="City">City</option>
        <option value="Ski">Ski</option>
      </select>

      <select name="temperature" value={sendReqToEmail.temperature} onChange={handleChange}>
      <option value="">Temperature</option>
        <option value="Hot">Hot</option>
        <option value="Cold">Cold</option>
        <option value="Temperate">Temperate</option>
      </select>

      <select name="flight" value={sendReqToEmail.flight} onChange={handleChange}>
        <option value="">Flight</option>
        <option value="Long">Long</option>
        <option value="Medium">Medium</option>
        <option value="Short">Short</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SendRequest