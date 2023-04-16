import React from "react";
import ForgotPasswordForm from "src/components/ForgotPasswordForm";
import "src/assets/css/component/forgot.css";

const Forgot = () => {
  return (
    <div className="form">
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password</p>
      <div className = "content">
        <form>
          <ForgotPasswordForm />
        </form>
      </div>
    </div>
  );
};

export default Forgot;
