const initialState = {
  heroes: [],
  hero: {
    name: '',
    email: ''
  }
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  console.log(action);
  switch (action.type) {
    case 'INIT':
      return {heroes: action.heroes};
    case 'EDIT_HERO':
      return Object.assign(newState, { hero: updateHero(state, action.hero) });
    case 'GET_HERO':
      console.log("in GET_HERO of reducer")
      return Object.assign(newState, { hero: action.hero }); 
    case 'SOMETHING':
      return {some: "thing"};
    default:
      return state;
  }
};

function updateHero(state, hero) {
  console.log('Posting: '+ hero);
  var request = new XMLHttpRequest();
  request.open('POST', 'https://ce3rt0e0yl.execute-api.us-east-1.amazonaws.com/prod/abbHeros', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(JSON.stringify(hero));
}