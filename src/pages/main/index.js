import React, { Fragment, Component } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    const { repositoryInput } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Enviar</button>
        </form>

        <ul>
          <li>
            <p>
              <strong> facebook/react </strong>
              {' '}
(A declarative spotlight that have never seen)
            </p>
            <a href="http://github.com/facebook/react"> Acessar </a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
