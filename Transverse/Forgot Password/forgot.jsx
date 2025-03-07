import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <h1>Forgot Password</h1>
      <p>Enter your email to reset your password.</p>
      <form>
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">Reset Password</button>
      </form>
      <a href="/login">Back to Login</a>
    </div>
  );
};

export default ForgotPassword;
