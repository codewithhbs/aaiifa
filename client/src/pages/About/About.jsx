import React from 'react'
import AIIFAProfile from './Components/AIIFAProfile.jsx';
import AIIFACTA from './Components/AIIFACTA.jsx';
import AIIFAGallery from './Components/AIIFAGallery.jsx';

import './About.css';

export default function AboutUs() {
  return (
    <div>
      
      <AIIFAProfile />
      <AIIFACTA />
      <AIIFAGallery />
    </div>
  )
}
