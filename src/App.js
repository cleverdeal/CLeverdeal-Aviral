import Landingpage from "./Pages/Landing.jsx";
import Listing from "./Pages/Listing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.jsx";
// import Home from "../src/Pages/Sign/Home"
// import Login from "../src/Pages/Sign/Login"
// import Signup from "../src/Pages/Sign/Signup"
// import Otp from "../src/Pages/Sign/Otp"
// import Otplog from "../src/Pages/Sign/Otplog"
import SignL from "../src/Pages/SignL"
import Login from "./Pages/Login.jsx";
import BrokerForm from "./Pages/BrokerForm.jsx";
import OTPBox from "./Components/OTPBox.jsx";
import LoginOtp from "./Pages/LoginOtp.jsx"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/property" element={<Listing />} />
            {/* <Route path="/home" exact element={<Home />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/Signup" exact element={<Signup />} />
            <Route path="/otp" exact element={<Otp />} />
            <Route path="/otplog" exact element={<Otplog />} /> */}
            <Route path="/signIn" element={<SignL />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Broker" element={<BrokerForm />} />
            <Route path="/Otp" element={<OTPBox />} />
            <Route path="/LoginOtp" element={<LoginOtp />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
