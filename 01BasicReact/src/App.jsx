// import Title from "./Title.jsx"
// import Faang from "./Faang.jsx"
// import RulesJSX from "./Rules.jsx"
// import Activity from "./Active.jsx";
import Headline from "./Headline.jsx";
import ProdcutContainer from "./ProductContainer.jsx";


function clickHandle(e) {
  console.log(e.target)
}


function App() {
  return (
    <>
      <Headline />  
      <ProdcutContainer  direction = "reverse" />

      <button onClick={clickHandle}>Click me!</button>
      
    </>
  );  
}

export default App;
