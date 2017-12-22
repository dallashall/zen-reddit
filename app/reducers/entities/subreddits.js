
const defaultState = [{
  id: '1234',
  name: 'TestSubreddit'
}];

export default (state = defaultState, action) => {
  switch (action.type) {
    case "value":
      return [];
    default:
      return state;
  }
};
