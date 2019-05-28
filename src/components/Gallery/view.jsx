import React, { PureComponent } from 'react';
import { Image } from '../Image';
import Select from 'react-select';
import Lightbox from 'react-image-lightbox';

class Gallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    const { handleRequestImages } = this.props;
    handleRequestImages();
  }

  render() {
    const { images, handleSortImages } = this.props;
    const { photoIndex, isOpen } = this.state;

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
            <Image
              image={image}
              key={i}
              index={i}
              openLightbox={(key) => this.setState({ isOpen: true, photoIndex: key })}
            />
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].IMAGE}
            nextSrc={images[(photoIndex + 1) % images.length].IMAGE}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].IMAGE}
            imageTitle={`${images[photoIndex].TAG}, ${images[photoIndex].DATE}`}
            imageCaption={images[photoIndex].DESCRIPTION}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}        
      </>
    )
  }
}

export default Gallery;