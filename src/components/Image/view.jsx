import React, { PureComponent } from 'react';

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { intersected: false };
    this.observer = null;
  }

  componentDidMount() {
    // Observe the elements in the view and determine if they intersect
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0];
      if (image.isIntersecting) {
        this.setState({ intersected: true });
        this.observer.disconnect();
      }
    });
    this.observer.observe(this.imgTag);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const { image, openLightbox, index } = this.props;

    // Declare the properties of image box
    let img, tag, date, description;
    // Define the values of image box if the element is intersected ("in view")
    if(this.state.intersected) {
      img = <img
        src={image.IMAGE}
        alt={image.DESCRIPTION || ''}
        className='base-image'
        onClick={() => openLightbox(index)}
      />
      tag = <p>{image.TAG}</p>
      date = <p>{image.DATE}</p>
      description = <p>{image.DESCRIPTION}</p>
    }
    // Return the image box
    return (
      <div
        ref={elem => (this.imgTag = elem)}
        className="image-wrapper"
      >
        <div className="intro-text">
          {tag}
          {date}
        </div>
        {img}
        {description}
      </div>
    );
  }
}

export default Image;