function Conversation({ direction, children }) {
  return (
    <div className={`conversation ${direction}`}>
      {direction === 'left' && (
        <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="baloon-man" width="80px" height="80px" />
      )}
      <p>{children}</p>
      {direction === 'right' && (
        <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="baloon-man" width="80px" height="80px" />
      )}
    </div>
  );
}

export default Conversation;
