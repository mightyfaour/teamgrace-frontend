import React, { useState } from "react";

import "./Pages.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { signUp } from "../../../components/api";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [formValues, setFormValues] = useState({
    companyName: "",
    email: "",
    name: "",
    language: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = fetch(signUp, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValues),
    }).then((res) => {
      if (res.status === 200) {
        navigate("/privacy");
      } else {
        navigate("/account");
        setErr(res.message);
      }
    });
    console.log("formValues: ", formValues);

    alert("Changes Saved");

    fetchData();
  };

  return (
    <div>
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(error) => error}
        className="account-form"
      >
        <h2> Account</h2>
        <div className="field-container">
          <div className="input-container">
            <label htmlFor="companyName">Company name</label>
            <TextValidator
              type="text"
              style={{ width: "380px" }}
              placeholder="bukunmi"
              value={formValues.companyName}
              onChange={(e) =>
                setFormValues({ ...formValues, companyName: e.target.value })
              }
              validators={["required"]}
              errorMessages={["This Field is Required"]}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <TextValidator
              type="text"
              style={{ width: "380px" }}
              placeholder="teamgrace@gmail.com"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              validators={["required", "isEmail"]}
              errorMessages={["This Field is Required", "The email is invalid"]}
            />
          </div>
        </div>
        <div className="field-container">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <TextValidator
              type="text"
              placeholder="Dozie Solomon"
              style={{ width: "380px" }}
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              validators={["required", "maxStringLength:40"]}
              errorMessages={[
                "This Field is Required",
                "Name must be less than 40",
              ]}
            />
          </div>
          <div className="input-container">
            <label htmlFor="PreferredLanguage">Preferred Language</label>
            <select
              name="language"
              value={formValues.language}
              onChange={(e) =>
                setFormValues({ ...formValues, language: e.target.value })
              }
              id="language"
            >
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
            </select>
            {/* <input type="text" placeholder="French" /> */}
          </div>
        </div>
        <h2>Password & Security</h2>
        <div className="field-container">
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <TextValidator
              type="password"
              style={{ width: "380px" }}
              placeholder="***************"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
              validators={["required"]}
              errorMessages={["This Field is Required"]}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Confirm Password</label>
            <TextValidator
              type="password"
              style={{ width: "380px" }}
              placeholder="***************"
              value={formValues.confirmPassword}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  confirmPassword: e.target.value,
                })
              }
              validators={["required"]}
              errorMessages={["This Field is Required"]}
            />
          </div>
        </div>

        <button type="submit">Save Changes</button>
      </ValidatorForm>
    </div>
  );
};

export default Account;
