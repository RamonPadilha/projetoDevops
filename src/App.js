import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: '',
    };
  }

  registraEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  registraSenha = (e) => {
    this.setState({ senha: e.target.value });
  };

  clickBotao = () => {
    const { email, senha } = this.state;

    if (email === 'ramonppadilha2@gmail.com' && senha === '10101010') {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  };

  render() {
    const { email, senha, mensagem } = this.state;

    return (
      <div className="App">
        <h1>Login</h1>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={this.registraEmail} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={this.registraSenha} />
        </div>
        <button onClick={this.clickBotao}>Acessar</button>
        <label>{mensagem}</label>
      </div>
    );
  }
}


export default App;