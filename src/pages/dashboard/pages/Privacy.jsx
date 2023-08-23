import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


import "../dashboard.css";
import  "./Pages.css"

const VideoChatComponent = ({ onConnect }) => {
  const [domain, setDomain] = useState("");

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleConnectClick = () => {
    if (domain) {
      onConnect(domain);
    }
  };

  return (
    <div>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="yourwebsite.com/privacy"
          value={domain}
          onChange={handleDomainChange}
			/>
		<Button variant="primary" onClick={handleConnectClick}>
        Set
      </Button>
      </Form.Group>

    </div>
  );
};

const Privacy = () => {
  const handleConnect = (domain) => {
  
    console.log("Connected to domain:", domain);
  };

  return (
    <div>
      <div className="privacy">
        <h2>Privacy & GDPR</h2>
        <p>Manage privacy and GDPR related settings</p>
        <hr />
        <br />

        <h3>Privacy policy for candidates</h3>
        <p>
          Copy below your Privacy Policy link if you want to have it
          automatically linked at the beginning of your TeamGrace interviews
        </p>
        <br />

        <VideoChatComponent onConnect={handleConnect} />
      </div>
    </div>
  );
};

export default Privacy;
