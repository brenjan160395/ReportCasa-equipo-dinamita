import { useState } from "react";

function App() {
  const [pantalla, setPantalla] = useState("login");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const estiloCaja = {
    maxWidth: "380px",
    margin: "40px auto",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    fontFamily: "Arial",
    textAlign: "center",
    backgroundColor: "white"
  };

  const estiloInput = {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box"
  };

  const estiloBoton = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  };

  const estiloLink = {
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: "bold"
  };

  if (pantalla === "login") {
    return (
      <div style={estiloCaja}>
        <h1>ReportCasa 🏠</h1>
        <h2>Iniciar Sesión</h2>

        <input
          style={estiloInput}
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          style={estiloInput}
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <button style={estiloBoton} onClick={() => alert("Bienvenido a ReportCasa")}>
          Entrar
        </button>

        <p>
          ¿No tienes cuenta?{" "}
          <span style={estiloLink} onClick={() => setPantalla("registro")}>
            Regístrate
          </span>
        </p>
      </div>
    );
  }

  return (
    <div style={estiloCaja}>
      <h1>ReportCasa 🏠</h1>
      <h2>Crear Cuenta</h2>

      <input
        style={estiloInput}
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        style={estiloInput}
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        style={estiloInput}
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />

      <button style={estiloBoton} onClick={() => alert("Cuenta creada, ahora inicia sesión")}>
        Crear Cuenta
      </button>

      <p>
        ¿Ya tienes cuenta?{" "}
        <span style={estiloLink} onClick={() => setPantalla("login")}>
          Inicia sesión
        </span>
      </p>
    </div>
  );
}

export default App;