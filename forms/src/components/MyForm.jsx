import { useState } from "react";
import "./MyForm.css";

const Myform = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio,setBio] = useState(user ? user.bio : "");
  const [role,setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setName('')
    setEmail('')
    setBio('')
    setRole('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label> 
            <span>Biografia:</span>
            <textarea name = "bio" placeholder="Digite sua biografia" onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
        </label>

        <label> 
            <span>Funcao no sistema:</span>
            <select name='role' onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuario</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </label>


        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Myform;
