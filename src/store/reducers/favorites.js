// Reducer sempre irá ouvir uma action disparada
// É através da action que conseguimos fazer alguma coisa
// (state, action) => o state é o estado atual, sem modificação
// o type é como se fosse o id da action
// a action são as informações disparadas pelo usuário
// o default é útil porque caso uma action não precise fazer nada, o reducer retorna default

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, loading: true };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state, loading: false, error: null, data: [...state.data, action.payload.data],
      };
    case 'ADD_FAVORITE_FAILURE':
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
