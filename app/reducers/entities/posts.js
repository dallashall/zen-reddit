
const defaultState = {
  "1234": [
    {
      title: "TestPost",
      id: "12345",
      post_hint: "link",
      url: "google.com",
      author: "KevinBacon"
    }
  ]
};


export default (state = defaultState, action) => {
  switch (action.type) {
    case "value":
      return {};
    default:
      return state;
  }
};
