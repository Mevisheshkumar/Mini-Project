import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input,setRecentPrompt} = useContext(Context)

    
    const handleInputChange = (event) => {
        setInput(event.target.value);
      };
    
      const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
          onSent();
        }
      };

      const handleCardClick = (promptText) => {
          setInput(promptText);
        //   onSent(); 
  };
    

    return (
        <div className='main'>
            <div className="nav">
                <p>Generative AI</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-contener">

                {!showResult
                ?<>
                    <div className="greet">
                    <p><span>Hello. user</span></p>
                    <p>How can I help you ?</p>
                    </div>
                <div className="cards">
                    <div className="card" onClick={() => handleCardClick('Create a 10-day itinerary for a hiking and camping trip in the Uttarakhand.')}>
                        <p>Tips: Create a 10-day itinerary for a hiking and camping trip in the Uttarakhand.</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card" onClick={() => handleCardClick('Find innovative solutions to reduce plastic pollution in oceans and landfills.')}>
                        <p>Tips: Find innovative solutions to reduce plastic pollution in oceans and landfills.</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card" onClick={() => handleCardClick('Create a recipe for a quick and easy weeknight dinner.')}>
                        <p>Tips: Create a recipe for a quick and easy weeknight dinner.</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card" onClick={() => handleCardClick('What is the area of a rectangle with a length of 10 cm and a width of 5 cm?')}>
                        <p>Tips: What is the area of a rectangle with a length of 10 cm and a width of 5 cm?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>


                </div>
                }

                
                    <div className="main-bottom">
                        <div className="search-box">
                            <input onChange={handleInputChange} onKeyDown={handleEnterPress} value={input} type="text" placeholder="Enter prompt" />
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                            </div>
                        </div>
                        <p className="bottom-info">
                            Genrative AI can make mistakes, So double-check it.
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Main
