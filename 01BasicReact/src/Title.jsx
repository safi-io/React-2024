// import "./Title.css"; // Convention is to make seprate CSS file for every JSX file

let greet = "GOOD MORNING"; // {} will be used to inject pure JS

// Props are the information that is being send

function Title({ headline, price}) {
    
    let styles = {backgroundColor: (price > 5000) ? "blue" : ""};

  return (
    <>
      <h2 className="Title" style={styles}>{headline}</h2>
      {price > 5000 && <p>Price is above 5000</p>} 
    </>
  );
}

export default Title; // Default Export, when export one
// export {Title} // Named Export, when export multiple
