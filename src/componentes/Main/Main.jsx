import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Ask Me</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-contener">
                <div className="greet">
                    <p><span>Hello. user</span></p>
                    <p>How can I help you ?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>text1gdfhghjdfjhgdfjgjdfgj</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>text2dgdfgdfghdfhgkjdfhgkdf</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>text3gjdfhkgjhdfkghkldf</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>text4gkjhsdfjkhgkhdfkghdfklghkl</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
