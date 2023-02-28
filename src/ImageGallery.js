import React, { useState, useRef, useEffect } from "react";
const viewPortHeight = 400;
const showHeight = viewPortHeight + 100;
const styles = {
  viewport: {
    top: 0,
    position: 'fixed',
    height: viewPortHeight,
    width: '100%',
    backgroundColor: '#ffffff88',
    zIndex: 999,
    border: '1px solid red',
  },
  body: {
    position: 'relative',
    marginTop: viewPortHeight,
  },
  ul: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 0,
  },
  li: {
    listStyle: 'none',
    flex: '0 0 33.333333%',
  },
  img: {
    width: '200px',
    height: '200px',
  }
}

function LazyImage({ index, image }) {
  const [viewable, setViewable] = useState(false);
  const ref = useRef();

  const handleScroll = (event) => {
    const { y, top } = ref.current.getBoundingClientRect();
    
    if (top <= showHeight & !viewable) {
      setViewable(true);
    }
    // if (top > showHeight && viewable) {
    //   setViewable(false);
    // }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <li style={styles.li}>
      <img
        ref={ref}
        style={styles.img} src={viewable ? image : ''} />
    </li>
  )
}

function ImageGallery({ images }) {
  return <div>
    <div style={styles.viewport}>
      <p>Viewport</p>
    </div>
    <div style={styles.body}>
      <ul style={styles.ul}>
        {images.map((image, key) => <LazyImage index={key + 1} key={key} image={image} />)}
      </ul>
    </div>
  </div>;
}

export default ImageGallery;
