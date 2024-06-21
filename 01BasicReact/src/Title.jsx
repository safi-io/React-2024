import "./Title.css" // Convention is to make seprate CSS file for every JSX file


let greet = "GOOD MORNING"; // {} will be used to inject pure JS

// Props are the information that is being send

function Title({headline}) {
    return <h2 className="Title">I am from {headline} and {greet.toLowerCase()}</h2>;
}

// export default Title; // Default Export, when export one
export {Title} // Named Export, when export multiple