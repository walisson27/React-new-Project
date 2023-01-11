import React, {useState} from "react";
import "../src/App.css";

function App() {
  const [values, setValues] = useState();
  const handlechangeValues = (value) => {
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClickButton = () => {
    console.log(values);
  };

  return(
    <div className="app--conteiner">
      <div className="register--container">
        <h1 className="register--title">Scrim Shop</h1>
        <input 
          type="text" 
          name='name'
          placeholder='Nome'
          className='register--input'
          onChange={handlechangeValues}
          />
        <input 
          type="text" 
          name='cost'
          placeholder='Preço'
          className='register--input'
          onChange={handlechangeValues}
          />
        <input 
          type="text" 
          name='category'
          placeholder='Categoria'
          className='register--input'
          onChange={handlechangeValues}
          />
          <button className="register--button"
          onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  )
}

export default App
