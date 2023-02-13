// import logo from "./logo.svg";
// import "./App.css";

import Main from "./Components/Main";

function App() {
  return (
    //One jsx element is retured by return statemet. Multiple element can not be used. But inside one element , It is posible to use multiple elements.
    // example :
    // <div>
    //   <h1></h1>
    //   <img/>
    // </div>

    // <> </> ==> This is a react fragment. It is used to wrap multiple elements and make them appere as one

    <div className="App">
      <p>My name is shamal Aravinda</p>
      <Main />
      <Main />
  
      <Main>
        <h5>Hello</h5>
        <p>Hi friends</p>
      </Main>

      {/* We can acsess elements inside a component as children using props */}

      <Main></Main>
      <Main item1 ="aaaa" item2="bbb" item3="ccc"/>
     

      
      {/* (shift + alt + down arrow) for duplicate a particular item */}
    </div>
  );
}

export default App;
