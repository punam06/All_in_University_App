import React from 'react';

const CreateAccount = () => {
  return (
    <div className="create-account">
      <h1>Create your account</h1>
      <p>Please fill in your details to register</p>
      <form>
        <label>Enter your email address</label>
        <input type="email" placeholder="Email" />
        <label>Enter your department</label>
        <input type="text" placeholder="Department" />
        <label>Choose a strong password</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CreateAccount;
