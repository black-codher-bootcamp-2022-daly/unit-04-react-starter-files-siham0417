
function Booklist(props) {
  return (
    <div>
      <h1
        style={{
          fontFamily: "cursive",
    
        }}
      >
        The Only Book Library You'll Need
      </h1>
      <div className="booklist-container">{props.children}</div>
    </div>
  );
}

export default Booklist;
