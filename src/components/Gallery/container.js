import { curry } from 'ramda';
import { connect } from 'react-redux';
import Gallery from './view';

import { handleRequestImages, handleSortImages } from './handlers';

const mapDispatchToProps = (dispatch) => ({
  handleRequestImages: () => handleRequestImages(dispatch),
  handleSortImages: (sortType, images) => curry(handleSortImages)(sortType)(images)(dispatch),
});

const mapStateToProps = (state) => ({
  images: state.images,
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
