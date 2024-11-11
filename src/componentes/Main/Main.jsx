import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Generative AI</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-contener">
                <div className="greet">
                    <p><span>Hello. user</span></p>
                    <p>How can I help you ?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>text1</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>text2</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>text3</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>text4</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className="main-bottom">
                        <div className="search-box">
                            <input type="text" placeholder="Enter prompt" />
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                <img src={assets.send_icon} alt="" />
                            </div>
                        </div>
                        <p className="bottom-info">
                            text you want ?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
