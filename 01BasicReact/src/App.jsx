import {Title} from "./Title.jsx"
import Faang from "./Faang.jsx"
// import RulesJSX from "./Rules.jsx"

// We can change name here when importing.

function App() {
  return (
      // Below is React Fragment(Empty Closing, Opening Tag), (To avoid extra node)
    <>

      {/* <Title />or, <Title></Title> */}
      
      <Title headline="Pakistan"/>   
      <Title headline={69}/> 

      <Faang title = "FAANG" companies={["facebook", "amazon", "apple","netflix", "google"]}/>

      <Faang title = "MAANG" companies={["meta", "apple", "amazon","netflix", "google"]}/>

    </>
  );
}

export default App;
