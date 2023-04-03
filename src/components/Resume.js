import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../assets/Resume.pdf'
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>This is the resume page. Click the link below to view my resume:</p>
      <a href={resume}>Click here for my pdf</a>
    </div>
  );
}

export default Resume;
