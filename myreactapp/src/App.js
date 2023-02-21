import { Fragment } from "react";
import Main from "./Components/Main";
import { details } from "./Data/Data";
import { details1 } from "./Data/Data";
import { details2 } from "./Data/Data";

//data access ==> method 3 ==> using a component
const NewBlock = () => {
  return (
    <Fragment>
      {details2?.map((element, index) => {
        return (
          <Main
            key={index}
            item1={element.name}
            item2={element.position}
            item3={element.city}
          />
        );
      })}
    </Fragment>
  );
};
//--------------------------------------------------------------------------------------------------------------------

function App() {
  //data access ==> method 2 ==> using a new variable
  const myDetails1 = details1?.map((element, index) => {
    return (
      <Main
        key={index}
        item1={element.name}
        item2={element.position}
        item3={element.city}
      />
    );
  });
  //--------------------------------------------------------------------------------------------------------------------
  return (
    //One jsx element is retured by return statemet. Multiple element can not be used. But inside one element , It is posible to use multiple elements.
    // example :
    // <div>
    //   <h1></h1>
    //   <img/>
    // </div>

    // <> </> ==> This is a jsx fragment. It is used to wrap multiple elements and make them appere as one
    // <Fragment> <Fragment/> ==> This is a react fragment. It is used to wrap multiple elements and make them appere as one

    <div className="App">
      <p>My name is shamal Aravinda</p>

      <Main></Main>

      {/* //data access ==> method 1 */}
      {details?.map((element, index) => {
        // ? ==> check data empty or not. if empty map will be stoped
        return (
          <Main
            key={index}
            item1={element.name}
            item2={element.position}
            item3={element.city}
          />
        );
      })}

      {/* //data access ==> method 2 */}
      {myDetails1}

      {/* //data access ==> method 3 */}
      <NewBlock />

      {/* <Main />
      <Main item1 ="aaaa" item2="bbb" item3="ccc"/>
      <Main /> */}

      {/* <Main>
        <h5>Hello</h5>
        <p>Hi friends</p>
      </Main> */}

      {/* We can acsess elements inside a component as children using props */}

      {/* <Main></Main>
      <Main item1 ="aaaa" item2="bbb" item3="ccc"/> */}

      {/* (shift + alt + down arrow) for duplicate a particular item */}
    </div>
  );
}

export default App;
