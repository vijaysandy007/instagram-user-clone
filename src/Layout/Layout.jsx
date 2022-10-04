import React from "react";
import './Layout.scss';
import Sidemenu from "../Sidemenu/Sidemenu";
import HomeComponet from "../Home/Home";
import HomeFriendsContent from "../HomeFriendsContent/HomeFriend";

const LayoutComponent = () =>{
    return  (
        <>
           <div className="grid-container">
           
                   <Sidemenu/>
                   <HomeComponet/>
                   <HomeFriendsContent/>

           </div>
         

        </>
    )
}

export default LayoutComponent