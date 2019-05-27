import React, { PureComponent } from 'react';

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { intersected: false };
    this.observer = null;
  }

  componentDidMount() {
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
    const { image } = this.props;
    return (
      <div className="image-wrapper">
        <div className="intro-text">
          <p>{image.TAG}</p>
          <p>{image.DATE}</p>
        </div>
        <img
          src={this.state.intersected ? image.IMAGE : ''}
          alt={image.DESCRIPTION || ''}
          ref={elem => (this.imgTag = elem)}
          className='base-image'
        />
        <p>{image.DESCRIPTION}</p>
      </div>
    );
  }
}

export default Image;