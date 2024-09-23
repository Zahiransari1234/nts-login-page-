import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import './App.css'
import { Toaster } from "react-hot-toast";
import Header from "./component/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";





// const Home = lazy(() => import("./pages/home"));
// const Login = lazy(() => import("./pages/login"));
// const Register = lazy(() => import("./pages/register"));


const App = () => {
  // const [count, setCount] = useState(0)

  return (
   <Router>
    <Header />
    <Toaster position="top-center" reverseOrder={true} />

    {/* fallback={<Loader />} */}

      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
          
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />


      </Routes>
      {/* </Suspense> */}
   

   </Router>
  );
};

export default App
