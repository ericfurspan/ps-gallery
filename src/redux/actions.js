import * as ActionTypes from './actionTypes';
import axios from 'axios';
import mockData from '../data';

// Plain actions go here
export const returnImages = (images) => {
  console.log(images)
  return {
    type: ActionTypes.RETURN_IMAGES,
    images
  }
}

// Async actions go here
export const requestImages = () => async (dispatch) => {
  try {
    // const response = await axios.get(galleryUrl);
    const response = await mockPromise;
    return dispatch(returnImages(response))
  } catch (error) {
    console.error(error);
  }
};

const mockPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve(mockData);
  }, 500);
})
