import { Route, Routes } from "react-router-dom";
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import { Services } from "../pages/Contactme";


export const AppRouter = () => {
    return (
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/*" element={<AppRouterContent />} />
        </Routes>
    );
  };


const AppRouterContent = () => {
  
    return (
            <>

        <Routes>
          <Route path="about/*" element={<About />}/>
          <Route path="services/*" element={<Services />}/>
        </Routes>
            </>
    );
}  