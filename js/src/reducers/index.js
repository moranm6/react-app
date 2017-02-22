const initialState = {
  heroes: [],
  hero: {
    name: '',
    email: ''
  }
}

export default (state = {names:[]}, action) => {
  console.log(action);
  switch (action.type) {
    case 'INIT':
      return {names: action.names};
    case 'SOMETHING':
      return {some: "thing"};
    default:
      return state;
  }
};