import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function TypedComponent() {

  useEffect(() => {
    // Initialize Typed.js inside the useEffect hook
    var typed = new Typed('#element', {
      strings: ['Web developer', 'Web designer', 'App developer', 'AI enthusiast'],
      typeSpeed: 77,
      loop: true,
    });

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <span id="element"></span>
  );
}
