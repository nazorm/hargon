import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage } from "./views/auth/Signup";
import bgImg from "./assets/bg.svg";
import { MerchantForm } from "./views/MerchantForm";

import { OtpPage } from "./views/auth/OTP";
import { EmailUpdate } from "./views/auth/EmailUpdate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img src={bgImg} alt="bg" className="left-image" />
        <div className="app-content">
          <div className="section-content">
            <Routes>
              <Route path="/" element={<SignupPage />} />
              <Route path="/merchant-register" element={<MerchantForm />} />
              <Route path="/verify/:slug" element={<OtpPage />} />
              <Route path="/update/email" element={<EmailUpdate />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
