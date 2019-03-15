import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

// connect do react-redux tem o papel de conectar o componente com algum reducer
import { connect } from 'react-redux';

// o bindActionCreators vai aplicar a cada action, um dispatch
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
  static propTypes = {
    addFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    const { addFavorite } = this.props;
    event.preventDefault();
    addFavorite();
  };

  render() {
    const { repositoryInput } = this.state;
    const { favorites } = this.props;
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
          {favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>
                  {' '}
                  {favorite.name}
                  {' '}
                </strong>
                {' '}
(
                {favorite.description}
)
              </p>
              <a href={favorite.url}> Acessar </a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

// mapStateToProps transformará o state do reducer em uma prop para consumir no componente
// o state do mapStateToProps representa todas as informações contidas no reducer
// o state.favorites é o reducer de function favorites

const mapStateToProps = state => ({
  favorites: state.favorites,
});

// transforma as actions em props
// tudo o que tem no => dispatch é o que os reducers irão ouvir
// o bindActionCreators vai aplicar um dispatch a cada action. O FavoriteActions são as actions
const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
