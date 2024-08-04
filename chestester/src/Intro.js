import React, { useState } from 'react';
import { Button } from '@mui/material';

const ToggleVisibility = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <Button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Element
        </Button>
        {isVisible && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
            This element is visible.
          </div>
        )}
      </div>
    );
  };

export default ToggleVisibility;
