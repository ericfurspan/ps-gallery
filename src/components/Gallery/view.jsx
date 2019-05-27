import React, { PureComponent } from 'react';
import { Image } from '../Image';
import Select from 'react-select';

class Gallery extends PureComponent {
  componentDidMount() {
    const { handleRequestImages } = this.props;
    handleRequestImages();
  }

  render() {
    const { images, handleSortImages } = this.props;
    return (
      <>
        <header className="header">
          <h1>PS Gallery</h1>
          <Select
            defaultValue={{ label: 'Select a Filter', value: 'Filter' }}
            options={[
              {label: 'Date (old to new)', value: 'sort_by_date_asc'},
              {label: 'Date (new to old)', value: 'sort_by_date_desc'},
              {label: 'Active', value: 'sort_by_active'}
            ]}
            onChange={(sortType) => handleSortImages(sortType.value, images)}
            className='select-dialog'
          />
        </header>
        <div className="grid">
          {images && images.map((image, i) => (
            <Image image={image} key={i} />
          ))}
        </div>
      </>
    )
  }
}

export default Gallery;