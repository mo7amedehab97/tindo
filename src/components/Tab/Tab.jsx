function Tab({ isActive, onClick, label }) {
  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}


export default Tab