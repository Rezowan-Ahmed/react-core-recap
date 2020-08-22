import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr Mahafuj Rahman",
    job: "Singer"
  };
  var person2 = {
    name: "Eva Rahman",
    job: "'kokil Kondi'"
  };
  var style = {
    color: 'green',
  backgroundColor: 'blue'
  }
  const nayoks =['anwar', 'jafor','amin', 'shohan', 'arif'];
  const products=[
    {name: 'Photoshop', price: '90.99'},
    {name: 'Illustrator', price:'60.99'},
    {name: 'PDF Reader', price:'5.99'},
    {name: 'Amazon', price:'10.99'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
          {
            products.map(pd =><Product product={pd}></Product>)
          }

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        
        {/* full products array tai pass kore dibo */}
       {/* 
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        
        <Counter></Counter>

        <h1 className ="" style = {style}>My Heading: {(10*10) -10}</h1>
        <h2 style ={{backgroundColor: 'cyan', color: 'darkblue'}}>Top Singer in Bangladesh: {person.name +" "+ person.job}</h2>
        <h3>Singer: {person2.name + " " + person2.job}</h3>
        <PersonName name="Aamir Khan" nayika="Karina"></PersonName>
        <PersonName name="Salman Khan" nayika="Ketrina kayef"></PersonName>
        <PersonName name="Sharukh Khan" nayika="Deepika"></PersonName>
        {/* using array */}
        <PersonName name={nayoks[0]} nayika="joifw"></PersonName>
        <PersonName name= {nayoks[1]} nayika="vdsjia"></PersonName>
        <Users></Users>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick= {() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;  /*{name: 'Photoshop', price: '90.99'}*/
  console.log(props);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function PersonName(props){   // This is function component
  const personStyles = {
    border: '2px solid red',
    margin: '10px',
    width: '400px'
  };
  console.log(props);
  return (
  <div style={personStyles}>
    <h2>Nayok: {props.name}</h2>
  <h3>Hero of {props.nayika}</h3>
  </div>
  )
}

export default App;
