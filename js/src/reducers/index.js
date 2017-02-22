const initialState = {
  heroes: [],
  hero: {
    name: '',
    email: ''
  }
}

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'INIT':
      return {heroes: action.heroes};
    case 'SOMETHING':
      return {some: "thing"};
    default:
      return state;
  }
};