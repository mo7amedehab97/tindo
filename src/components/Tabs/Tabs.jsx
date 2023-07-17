import  { useState, Children, cloneElement } from 'react';

// Tabs component
function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            isActive: index === activeTab,
            onClick: () => handleTabClick(index),
          })
        )}
      </div>
      <div className="tab-content">
        {Children.toArray(children)[activeTab].props.children}
      </div>
    </div>
  );
}

export default Tabs