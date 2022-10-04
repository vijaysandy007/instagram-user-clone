import './App.scss';
import LayoutComponent from './Layout/Layout';
import {Routes, Route} from 'react-router-dom';
import HomeComponet from './Home/Home';
import HomeFriendsContent from './HomeFriendsContent/HomeFriend';


const App = () =>{
  return (
     <>
        <LayoutComponent/>

        <Routes> 
          
            {/* <Route path='/' element={<HomeComponet/>} />
            <Route path='/' element={<HomeFriendsContent/>} /> */}
          
           </Routes>
     
     </>
  )
}



export default App;
