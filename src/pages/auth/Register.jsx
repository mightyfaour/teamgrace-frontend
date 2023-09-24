import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import Sidebar from "../../components/Sidebar";
import FrontPageHeader from "../../components/FrontPageHeader";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    companyName: "",
    email: "",
    name: "",
    language: "",
    password: "",
    confirmPassword: "",
  });
  const userRef = useRef(null);
  const errRef = useRef();

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState({
    companyName: false,
    email: false,
    name: false,
  });

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [registerationError, setRegisterationError] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test({ ...formValues?.name }));
  }, [{ ...formValues?.name }]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test({ ...formValues?.email }));
  }, [{ ...formValues?.email }]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test({ ...formValues?.password }));
    setValidMatch(formValues?.password === formValues?.confirmPassword);
  }, [{ ...formValues?.password }, { ...formValues?.confirmPassword }]);

  useEffect(() => {
    setRegisterationError("");
  }, [
    { ...formValues?.name },
    { ...formValues?.password },
    { ...formValues?.confirmPassword },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formValues: ", formValues);
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
        registerationError(res.message);
      }
    });
    console.log("formValues: ", formValues);

    alert("Changes Saved");

    fetchData();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="logo">
          Team<span>Grace</span>
        </h1>
        <h2>Register Account</h2>
        <div className="field-container">
          <div className="input-container">
            <label htmlFor="companyName">Company name</label>
            <input
              type="text"
              placeholder="Team grace"
              value={formValues.companyName}
              onChange={(e) =>
                setFormValues({ ...formValues, companyName: e.target.value })
              }
              required
              aria-invalid={validName ? "false" : "true"}
              autoComplete="off"
              onBlur={() => setUserFocus({ ...userFocus, companyName: false })}
              onFocus={() => setUserFocus({ ...userFocus, companyName: true })}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="teamgrace@gmail.com"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="emailnote"
              autoComplete="off"
              onBlur={() => setUserFocus({ ...userFocus, mail: false })}
              onFocus={() => setUserFocus({ ...userFocus, mail: true })}
            />
          </div>
          {/* <p
            id="emailnote"
            className={
              { ...userFocus.email } && !validEmail
                ? "instructions"
                : "offscreen"
            }
          >
            please enter a valid email
          </p> */}
        </div>
        <div className="field-container">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Dozie Solomon"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              ref={userRef}
              required
              aria-invalid={validName ? "false" : "true"}
              autoComplete="off"
              aria-describedby="uidnote"
              onBlur={() => setUserFocus({ ...userFocus, name: false })}
              onFocus={() => setUserFocus({ ...userFocus, name: true })}
            />
            {/* <p
              id="uidnote"
              className={
                userFocus && formValues.name && !validName
                  ? "instructions"
                  : "offscreen"
              }
            >
              name must be 4-24 characters long and start with a letter
            </p> */}
          </div>
          <div className="input-container">
            <label htmlFor="PreferredLanguage">Preferred Language</label>
            <select
              name="language"
              id="language"
              onClick={(e) =>
                setFormValues({ ...formValues, language: e.target.value })
              }
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
            <input
              type="password"
              placeholder="***************"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            {/* <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p> */}
          </div>
          <div className="input-container">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              placeholder="***************"
              value={formValues.confirmPassword}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  confirmPassword: e.target.value,
                })
              }
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
          </div>
          {/* <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            Must match the first password input field.
          </p> */}
        </div>

        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
        <p>
          Already registered? <Link to="/signin">Login</Link>
        </p>
      </form>
    </>
  );
};

export default Register;
