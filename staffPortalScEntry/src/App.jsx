
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import Footer from "./components/Footer";
import CourseList from "./screens/Courses/CourseList";

import Header from "./screens/navbar";




function App()
{
  return(
    
    <>
    <Routes>
   

    {/* <Dashboard/>

    <Footer/>
    <CourseList/> */}
    <Route path="/course" element={<CourseList/>}></Route>
      
    </Routes>
    

    </>
  );
}

export default App;