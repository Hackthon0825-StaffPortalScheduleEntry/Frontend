import Footer from "./components/Footer";
import Header from "./screens/navbar";
import LogIn from "./screens/LogIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App()
{
  return(
  <>
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<LogIn />} />
    </Routes> 
    {/* <Footer/> */}
    <ToastContainer />

  </>
  );
}

export default App;