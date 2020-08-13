import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: "Edwin",
      Apellido: "Cotom",
      Edad: 20,
      Direcccion: "xela",
      Telefono: 35451594,
      Semestre: 1,
      Visible: "visible",
      Texto: "Ocultar"
    };
  }
  render() {
    return (
      <div>
        <ul style={{ visibility: this.state.Visible }}>
          <li>Nombre: {this.state.Nombre}</li>
          <li>Apellido: {this.state.Apellido}</li>
          <li>Edad: {this.state.Edad}</li>
          <li>Direcccion: {this.state.Direcccion}</li>
          <li>Telefono: {this.state.Telefono}</li>
          <li>Semestre: {this.state.Semestre}</li>
        </ul>
        <button onClick={() => this.E1()}>Cambiar Nombre</button>
        <button onClick={() => this.E2()}>Cambiar Apellido</button>
        <button onClick={() => this.E3()}>Cambiar Edad</button>
        <button onClick={() => this.E4()}>Cambiar Direcccion</button>
        <button onClick={() => this.E5()}>Cambiar Telefono</button>
        <button onClick={() => this.E6()}>Cambiar Semestre</button>
        <button onClick={() => this.Ocultar()}>{this.state.Texto}</button>
      </div>
    );
  }
  E1() {
    this.setState({ Nombre: "Benjamin" });
  }
  E2() {
    this.setState({ Apellido: "Martinez" });
  }
  E3() {
    this.setState({ Edad: this.state.Edad + 1 });
  }
  E4() {
    this.setState({ Direcccion: "Quetzaltenango" });
  }
  E5() {
    this.setState({ Telefono: 45784525 });
  }
  E6() {
    this.setState({ Semestre: this.state.Semestre + 1 });
  }

  Ocultar() {
    if (this.state.Visible === "visible") {
      this.setState({ Visible: "hidden" });
      this.setState({ Texto: "Mostrar" });
    } else {
      this.setState({ Visible: "visible" });
      this.setState({ Texto: "Ocultar" });
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  rootElement
);
