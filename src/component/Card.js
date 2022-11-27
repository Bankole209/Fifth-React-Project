import React from "react";
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";


function Card(props){
    return(
        <div className="contact-card">
        <img src={props.img} className="finger" alt="gift"/>
        <h3 className="name">{props.name}</h3>
        <div className="info-group">
            <FaPhone style={{ color:'#', fontSize: '15px', marginRight: '4px'}}></FaPhone>
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <FaEnvelope style={{ color:'#', fontSize: '13px', marginRight:'4px'}}></FaEnvelope>
            <p className="email">{props.email}</p>
        </div>
        </div>
    )
}

export default Card;