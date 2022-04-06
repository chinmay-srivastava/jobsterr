import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import "../src/App.css"

export default class ImageButton extends Component {
  render() {
            let {img_url,img_label}=this.props
    return (
      <div style={{width:"150px", height:"150px", marginTop:"70px", marginLeft:"180px"}}>
                <Link to="/newpage">
                <button className='img_button' style={{width:"150px", height:"150px",
          
          borderRadius: "100px",
          fontSize: "0",
          }} >
                          <img src={img_url}
                          style={{width:"120px", height:"120px",
                          
                          borderRadius: "80px",
                          
                          }} ></img>
                </button>
                </Link>
                <label style={{fontSize:"20px", color:"red"}}>{img_label}</label>
      </div>
    )
  }
}
