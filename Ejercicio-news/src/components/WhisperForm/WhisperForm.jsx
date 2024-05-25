import React, { useEffect, useState } from 'react';
import './WhisperForm.scss';
import { useNavigate } from 'react-router-dom';

const WhisperForm = () => {
  const initialValue = {
    name: "",
    email: "",
    title: "",
    abstract: "",
    multimedia: "", 
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!data.name) {
      setMessage("Name is required");
      setBtnDisabled(true);
    } else if (data.name.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [data]);

  const handleInputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setData({
      ...data, 
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem("data",JSON.stringify(data))
    console.log(data);
    setData(initialValue);
    navigate("/");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Escribe tu nombre"
            value={data.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escribe tu correo"
            value={data.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Escribe el titulo"
            value={data.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="abstract">Escribe un abstract de tu articulo</label> <br />
          <textarea
            id="abstract"
            name="abstract"
            value={data.abstract}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="multimedia"
            name="multimedia"
            placeholder="Escribe el url de tu imagen/video"
            value={data.multimedia}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input type="submit" value="Enviar" disabled={btnDisabled} />
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default WhisperForm;
