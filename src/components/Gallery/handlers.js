import { requestImages, returnImages } from '../../redux/actions';

// Makes request for images
export const handleRequestImages = (dispatch) => (
  dispatch(requestImages())
);

// Sorts images and updates redux store 
export const handleSortImages = (sortType, images, dispatch) => {
  switch(sortType) {
    case 'sort_by_date_desc' :
      const sorted_by_date_desc = images.slice().sort((a,b) => {
        return new Date(b.DATE) - new Date(a.DATE);
      });
      return dispatch(returnImages(sorted_by_date_desc));
    case 'sort_by_date_asc' :
      const sorted_by_date_asc = images.slice().sort((a,b) => {
        return new Date(a.DATE) - new Date(b.DATE);
      });
      return dispatch(returnImages(sorted_by_date_asc));
    case 'sort_by_active' :
      const sorted_by_active = images.slice().sort((a,b) => {
        return a.ACTIVE > b.ACTIVE ? 1 : -1
      });
      return dispatch(returnImages(sorted_by_active));
    default :
      return images;
  }
}
