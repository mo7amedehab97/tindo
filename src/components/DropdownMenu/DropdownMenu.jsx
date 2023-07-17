import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu({ children, onSelect }) {
    const [selectedValue, setSelectedValue] = useState('');
    const [isVisible, setIsVisible] = useState(false);
  
    // Toggle menu visibility
    const toggleMenu = () => {
      setSelectedValue('');
      setIsVisible(!isVisible)
    };
  
    // Handle menu item selection
    const handleSelect = (value) => {
      setSelectedValue(value);
      if (onSelect) {
      setIsVisible(!isVisible)
        onSelect(value);
      }
    };
  
    return (
      <div className="dropdown-menu">
        <div className="dropdown-trigger" onClick={toggleMenu}>
          {selectedValue || 'Select'}
        </div>
       {
        isVisible && <div className="dropdown-content">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onSelect: handleSelect,
          })
        )}
      </div>
       }
        
      </div>
    );
  }
  
export default DropdownMenu