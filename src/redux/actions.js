import * as ActionTypes from './actionTypes';
import axios from 'axios';
import mockData from '../data';
import { formatResponse } from '../utils/validation';

// Mock promise used in place of API which is throwing
// 503 error- http://gsx2json.com/api?id=1wZa0Gx2yAFDyMVayzRn428SDXCOJHOL-0_IX9uLiWW0
const mockPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve(mockData);
  }, 500);
})

/**
 * Plain actions below
 */
export const returnImages = (images) => {
  return {
    type: ActionTypes.RETURN_IMAGES,
    images
  }
}
/**
 * Async actions below
 */
export const requestImages = () => async (dispatch) => {
  try {
    // const response = await axios.get(galleryUrl);
    const response = await mockPromise;
    const cleanResponse = formatResponse(response);
    return dispatch(returnImages(cleanResponse))
  } catch (error) {
    console.error(error);
  }
};

