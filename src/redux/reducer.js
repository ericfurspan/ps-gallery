const initialState = {
  images: [],
}
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'RETURN_IMAGES' :
      console.log('RETURN_IMAGES');
      return Object.assign({}, state, {
        images: action.images,
      });
    default :
      return state;
  };
}
