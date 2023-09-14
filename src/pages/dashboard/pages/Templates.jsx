import React, { useState } from 'react';

const Template = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [message, setMessage] = useState('');

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
    setMessage('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const renderTemplatePopup = () => {
    switch (selectedTemplate) {
      case 'email':
        return (
          <div className="template-popup">
            <h3>Email Template</h3>
            <textarea
              placeholder="Enter your email message here..."
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        );
      case 'sms':
        return (
          <div className="template-popup">
            <h3>SMS Template</h3>
            <textarea
              placeholder="Enter your SMS message here..."
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        );
      case 'whatsapp':
        return (
          <div className="template-popup">
            <h3>WhatsApp Template</h3>
            <textarea
              placeholder="Enter your WhatsApp message here..."
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Template Selector</h2>
      <select onChange={handleTemplateChange} value={selectedTemplate}>
        <option value="">Select Template</option>
        <option value="email">Email Template</option>
        <option value="sms">SMS Template</option>
        <option value="whatsapp">WhatsApp Template</option>
      </select>

      {selectedTemplate && renderTemplatePopup()}

      <button onClick={() => alert(`Selected Template: ${selectedTemplate}\nMessage: ${message}`)}>
        Save
      </button>
    </div>
  );
};

export default Template;
