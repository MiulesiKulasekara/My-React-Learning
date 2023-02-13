const degree = 'BSC IT special in SE';
const job = 'Lecturer';

const myObject = {
    degree: `${degree}`,
    job: `${job}`,
    city: 'Colombo'
}

function Main({children , item1 , item2 , item3}) {

    // props(properties) ==> comes as objects
    // Therefore we can use childeren keyword instead of props keword. This is relevnets to object destructering
    // console.log(props);

    const {city} = myObject;
    
  return (
    <>
      <p>I am 22 years old.</p>
      {children}
      <ul>
        <li>{job}</li>
        <li>{degree}</li>
        <li>{myObject.degree}</li>
        <li>{myObject.job}</li>
        <li>{city}</li>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </>
  );
}

export default Main;

//export default functionName
