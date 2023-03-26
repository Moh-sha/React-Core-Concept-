import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const nayoks = ["salam", "al-amin", "kayes", "shakib"];
  const Product = [
    { name: "photshop", price: "$12" },
    { name: "premier pro", price: "$10" },
  ];

  const ProductName = Product.map((element) => element.name);
  console.log(ProductName);
  const nayoksName = nayoks.map((nyk) => nyk);
  console.log(nayoksName);

  return (
    <div className="App">
      <header className="App-header"></header>
      <p>this is a person </p>
      <ul>
        {Product.map((pdn) => (
          <li>{pdn.name}</li>
        ))}
      </ul>
      <ul>
        {Product.map((pdn) => (
          <li>{pdn.price}</li>
        ))}
      </ul>

      <ul>
        {nayoks.map((nyk) => (
          <li>{nyk}</li>
        ))}
      </ul>
      <ul>
        {Product.map((element) => (
          <Person productes={element}> </Person>
        ))}
      </ul>
      <Count></Count>
      <User></User>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const HandlerClick = () => {
    const NewCount = count + 1;
    setCount(NewCount);
  }; //arrow function

  const DiscreaseHandler = () => {
    const newcount = count - 1;
    setCount(newcount);
  };
  return (
    <div>
      <h1>This state is : {count}</h1>
      <button onClick={HandlerClick}>Increase</button>
      <button onClick={DiscreaseHandler}>Discrease</button>
    </div>
  );
}
function User()
{

  const [Users,SetUser]=useState([]);
useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>JSON())
  .then(data=>
    SetUser(data); ) },[]
)

 return (

    <div>

   <h1>User Data is : </h1>
   
    <ul>
      {
               Users.map(element => <li>{element.email}</li>)


      }



    </ul>
   
    


    </div>


 )














}
function Person(props) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "red",
        margin: "20px",
        border: "2px solid red",
      }}
    >
      <h1
        style={{
          backgroundColor: "blue",
          color: "red",
          margin: "20px",
          border: "2px solid red",
        }}
      >
        this is {props.productes.name}
        {<br></br>}
        this is {props.productes.price}
      </h1>
    </div>
  );
}

export default App;
