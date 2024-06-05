import React, { useState } from 'react'

const RegistrationForm = () => {

  const [values, setValues] = useState({
    firstName: "",
    username: "",
    lastName: "",
    email: ""
  });

  const handleInputChange = (event) => {

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.firstName} {values.lastName}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        )}

        {!valid && (<div className='input-group'>
          <label> First Name</label>

          <input
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
          </div>
        )}

        {submitted && !values.firstName && (
          <span className="error-space" id="first-name-error">Please enter a first name</span>
        )}

        {!valid && (<div  className='input-group'>
                  <label> Last Name</label>

          <input
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
          </div>
        )}

        {submitted && !values.lastName && (
          <span className="error-space" id="last-name-error">Please enter a last name</span>
        )}

        {!valid && (<div  className='input-group'>
          <label> Username</label>
          <input
            class="form-field"
            type="text"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={handleInputChange}
          />
          </div>
        )}

        {submitted && !values.username && (
          <span className="error-space" id="last-name-error">Please enter a Username name</span>
        )}

        {!valid && (<div  className='input-group'>
                <label> Email</label>
          <input
            class="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          </div>
        )}

        {submitted && !values.email && (
          <span className="error-space" id="email-error">Please enter an email address</span>
        )}

        {!valid && (
          <button class="form-field" type="submit">
            Register
          </button>
        )}
      </form>
    </div>
  );

}

export default RegistrationForm