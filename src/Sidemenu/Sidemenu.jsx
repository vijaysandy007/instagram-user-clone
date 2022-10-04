import React from "react";
import './Sidemenu.scss';
import {Link} from 'react-router-dom'

const Sidemenu =() =>{
    return (
        <>
       
           <div className="sidemenu">
                <a href="instagram.com" className="instaLogo"><img src={require('../Assets/Img/instagramlogo.png')} alt="" /></a>

                <div className="drop-down-sidemenu">
                    <ul>
                      <li> <img src={require('../Assets/Img/hut.png')} alt="" className="sidemmenuIcon"  /> 
                      
                       <Link to={'/'}> <span>Home</span></Link> 
                       
                       </li>
                      <li><img src={require('../Assets/Img/magnifying-glass.png')} alt="" className="sidemmenuIcon"  />  
                      
                      <Link to={'/explore'}><span>Explore</span></Link>  
                      
                      </li>
                      <li> <img src={require('../Assets/Img/chat.png')} alt="" className="sidemmenuIcon"  /> 
                      
                      <Link to={'/message'}><span>Message</span></Link> 
                      
                      </li>
                      <li><img src={require('../Assets/Img/love.png')} alt="" className="sidemmenuIcon"  /> 
                      
                      <Link to={'/notification'}><span>Notification</span></Link> 
                      
                      </li>
                      <li><img src={require('../Assets/Img/tab.png')} alt="" className="sidemmenuIcon"  /> 
                      
                      <Link to={'/create'}><span>Create</span></Link> 
                      
                      </li>
                      <li><img src={require('../Assets/Img/hut.png')} alt="" className="sidemmenuIcon"  /> 
                      
                      <Link to={'/profile'}><span>Profile</span></Link>  
                      
                      </li>
                    </ul>
                     
                </div>

                <div className="more-section">
                <img src={require('../Assets/Img/more.png')} alt="" />
                  <p> More</p>
                </div>
                 
             </div>
        </>
    )
}

export default Sidemenu