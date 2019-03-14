// Reducer sempre irá ouvir uma action disparada
// É através da action que conseguimos fazer alguma coisa
// (state, action) => o state é o estado atual, sem modificação
// o type é como se fosse o id da action
// a action são as informações disparadas pelo usuário
// o default é útil porque caso uma action não precise fazer nada, o reducer retorna default

const INITIAL_STATE = [
  { id: 1, text: 'Fazer cafésd' },
  { id: 2, text: 'Estudar GoReact' },
  { id: 3, text: 'Estudar dasdas' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
