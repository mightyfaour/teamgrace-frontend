import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "../dashboard.css";
import "./Pages.css";

// const VideoChatComponent = ({ onConnect }) => {
//   const [domain, setDomain] = useState("");

//   const handleDomainChange = (event) => {
//     setDomain(event.target.value);
//   };

//   const handleConnectClick = () => {
//     if (domain) {
//       onConnect(domain);
//     }
//   };

//   return (
//     <div className="">
//       <Form.Group>
//         <Form.Control
//           type="text"
//           placeholder="yourwebsite.com/privacy"
//           value={domain}
//           onChange={handleDomainChange}
//         />
//         <Button variant="primary" onClick={handleConnectClick}>
//           Set
//         </Button>
//       </Form.Group>
//     </div>
//   );
// };

const Privacy = () => {
  // const handleConnect = (domain) => {
  //   console.log("Connected to domain:", domain);
  // };

  return (
    <div>
      <div className="privacy_container">
        <h2 style={{ color: "darkgreen" }}>Privacy & GDPR</h2>
        <p style={{ marginBottom: "2rem", marginTop: "1rem" }}>
          Manage privacy and GDPR related settings
        </p>
        <hr />
        <br />

        <h3 style={{ color: "darkgreen", marginBottom: "2rem" }}>
          Privacy policy for candidates
        </h3>
        <p>
          Copy below your Privacy Policy link if you want to have it
          automatically linked at the <br />
          beginning of your TeamGrace interviews
        </p>
        <br />

        <div className="setVideo">
          <button className="http">https://</button>
          <input
            type="text"
            className="input_privacy"
            placeholder="yourwebsite.com/privacy"
          />
          <button className="set">Set</button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
