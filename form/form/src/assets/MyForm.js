import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your email:
        <input 
          type="email" 
          name="mail" 
          value={inputs.mail || ""} 
          onChange={handleChange}
        />
        </label>
        <label>summary:
        <textarea value={inputs.textarea} name="summary" onChange={handleChange} />
      </label>
        <input type="submit" />
    </form>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));

export  default MyForm;