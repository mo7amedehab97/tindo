function MenuItem({ children, value, onSelect }) {
    const handleClick = () => {
      if (onSelect) {
        onSelect(value);
      }
    };
  
    return (
      <div className="menu-item" onClick={handleClick}>
        {children}
      </div>
    );
  }

  export default MenuItem