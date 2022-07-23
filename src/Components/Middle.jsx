import React, { useState } from 'react'
import { last, second_extra, SliderData, third, Trending } from './slider'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import "./Middle.css"
import ReactPlayer from "react-player";
import Navbar from './Navbar/Navbar';
import { Footer } from './Footer';
// import "./AddVideo.css"

export const Middle = ({ slides}) => {
    const [state, setState] = useState(0)
    const [current , setCurrent] = useState(0)
    
    // const length = slides.length;
    // console.log(length)
    const next =()=>{
        setState(state === 1 ? 0: state+1)
    }
    const prev = ()=>{
        setState(state === 0 ? 1 : state-1)
    }
    const prevstate = ()=>{
        setCurrent(current === 0 ? slides.length-1: current-1)
    } 
   const nextstate = ()=>{
       setCurrent(current === slides.length-1 ? 0: current+1)
   }

  return (
    <div>
        <Navbar/>
        
        <div className='upper-box'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prev} />
        <FaArrowAltCircleRight className = "right-arrow" onClick={next}/>
        
  
{SliderData.map((slide,index)=>{
        return (
            <div key={index}   className={index === state ? "slide_action" : "slide"}>
        {index=== state && ( <img  src= {slide.image} alt="images"  className='image-map'/>)}
       
        </div>
        )
    })}
   </div>
      <h4 className='title_15'>15% off + Extra 20% Off Auto-Replenishment on SkinMedica</h4>
      <p className='pars'>Save on top skin care formulas rooted in science and created by dermatologists. Plus, receive a Skinmedica Vitamin C+E Complex 0.25 oz ($29 value) when you spend $160 or more on the brand.</p>
      <div className='extra-low'>
      <img src="https://static.thcdn.com/images/medium/webp/widgets/208-us/10/0428-STDCRE-35244-DS-MB-Dermstore-May-Photography-THG0034748-PRIORITY-SHOTS-16-HP_LPSQ_BANNER_676x556-041110.jpg" alt="" style={{
          "margin-left" : "50px"
      }} />
      <div className='second_extra_low'>
          
      <FaArrowAltCircleLeft className='second_left-arrow' onClick={prevstate} />
        <FaArrowAltCircleRight className = "right_left-arrow" onClick={nextstate}/>
      {second_extra.map((e,index)=>(
          <div key={index}  className={index === state ? "slide_act" : "sl"}>
              {index === current && (<div><img  src= {e.image} alt="images"  className='image2-map'/> <br />
              <div className='data'>
              <p>{e.title}</p>
              <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
              <p>MSRP : {e.MSRP}</p>
              <button className='button'>Quick Buy</button>
              </div></div>)}
              
              </div>
      ))}
      </div>
     
      </div>
      <div style={{
              "margin-top" : "5%",
              "margin-left" : "45%"

          }}>
          <span style={{
              "fontFamily" : "sans-serif",
              "fontSize" : "25px"
          }}>Shop By Category</span>
          
      </div>
      <div className='someting_but'>
          <button>SKIN CARE</button>
          <button>SUNSCREEN</button>
          <button>MOISTURIZERS</button>
          <button>HAIR CARE</button>
          <button>EYE CREAM</button>
          <button>CLEANSERS</button>
          <button>MAKEUP</button>
          <button>FACE SERUMS</button>
      </div>
      <div style={{
          "margin-top" : "5%"
      }}>
      <span style={{
          "margin-left": "45%",
          "fontSize" : "25px"
      }}>Best Sellers</span>
       <FaArrowAltCircleLeft className='third_left-arrow' onClick={prev} />
        <FaArrowAltCircleRight className = "fourth_left-arrow" onClick={next} />
      {third.map((e,index)=>{
       return (
           <div key={index}  className={index === state ? "slide_action" : "slide"} >
              {index === state && (<div  className='set_all'><div>
               <img src= {e.image1} alt="" className='third_image'/>
               <p>{e.title1}</p>
               <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
               <p>{e.price1}</p><button className='button_1'>QUICK BUY</button>
               
               </div>
               <div>
               <img src= {e.image2} alt="" className='third_image'/>
               <p>{e.title2}</p>
               <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
               <p>{e.price2}</p><button className='button_1'>QUICK BUY</button></div>
               <div>
               <img src= {e.image3} alt="" className='third_image'/>
               <p>{e.title3}</p>
               <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
               <p>{e.price3}</p><button className='button_1'>QUICK BUY</button></div>
               <div>
               <img src= {e.image4} alt="" className='third_image'/>
               <p>{e.title4}</p>
               <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
               <p>{e.price4}</p><button className='button_4S'>QUICK BUY</button></div>
               <div>
               <img src= {e.image5} alt="" className='third_image'/>
               <p>{e.title5}</p>
               <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
               <p>{e.price5}</p>
               <button  className='button_4S'>QUICK BUY</button>
               </div></div>)}
               
           </div>
       )
      })}
    <div style={{
          "margin-top" : "15%",
          
      }}>
      <span style={{
          "margin-left": "45%",
          "fontSize" : "25px"
      }}>Now Trending</span>
             <FaArrowAltCircleLeft className='third_left-arrow' onClick={prev} />
        <FaArrowAltCircleRight className = "fourth_left-arrow" onClick={next} />
      {Trending.map((e,index)=>{
       return (
           <div key={index}  className={index === state ? "slide_action" : "slide"} >
              {index === state && (<div  className='set_trend'><div>
               <img src= {e.image1} alt="" className='trending_img'/>
               <h4>{e.title1}</h4>
               
               
               </div>
               <div>
               <img src= {e.image2} alt="" className='trending_img'/>
               <h4>{e.title2}</h4>
               </div>
               <div>
               <img src= {e.image3} alt="" className='trending_img'/>
               <h4>{e.title3}</h4>
              </div>
               <div>
               <img src= {e.image4} alt="" className='trending_img'/>
               <h4>{e.title4}</h4>
             </div>
            </div>)}
               
           </div>
       )
      })}
      </div>
      <div className='image-big'>
          <img src="https://static.thcdn.com/images/large/webp/widgets/208-us/40/original-0429-STDCRE-35241-CM-DS-Disrupter-Banner-SCF-1640x244--022640.jpg" alt="" />
      </div>
      <div  style={{
          "margin-top" : "5%",
          
      }}>
      <span style={{
          "margin-left": "45%",
          "fontSize" : "25px"
      }}>Featured Brands</span>
      
      {last.map((e,index)=>{ 
          return (
              <div key = {index} className = "hii_div">
                  <img src={e.image1} alt="" className = "hello_div"/>
                  <img src={e.image2} alt="" className = "hello_div"/>
                  <img src={e.image3} alt="" className = "hello_div"/>
                  <img src={e.image4} alt="" className = "hello_div"/>
                  <img src={e.image5} alt="" className = "hello_div"/>
                  <img src={e.image6} alt="" className = "hello_div"/>
              </div>
      )
      })}
     
      </div>
      <div className="Video1" >

            
        
       <ReactPlayer  width="100%" height="400px"
       controls url="https://s1.thcdn.com/productvideo/12902717/dermstore_60sec_16x9_new.mp4"/>


       
    </div>
      </div>
     <Footer/>
    </div>
  )
}


