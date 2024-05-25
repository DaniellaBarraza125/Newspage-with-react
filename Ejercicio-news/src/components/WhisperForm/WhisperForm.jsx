import React from 'react'
import './WhisperForm.scss'

const WhisperForm = () => {
  return (
    <div className="formContainer">
      
    <form >
      <div>
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder='Escribe tu nombre'
        // value={formData.nombre}
        // onChange={handleChange}
        required
      />
    </div>
    <div>
      <input
        type="email"
        id="correo"
        name="correo"
        placeholder='Escribe tu correo'
        // value={formData.correo}
        // onChange={handleChange}
        required
      />
    </div>   
    <div>
      <label htmlFor="comentario">Cuentanos más:</label> <br></br>
      <textarea
        id="comentario"
        name="comentario"
        // value={formData.comentario}
        // onChange={handleChange}
      />
    </div>
    <div>
    <button type="submit">Enviar</button>
    </div>
  </form>
  </div>

  )
}

export default WhisperForm