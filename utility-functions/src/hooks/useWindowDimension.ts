import {useState, useEffect} from 'react';

const useWindowDimension = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    setWindowDimensions(dimensions);
  }, []);

  return windowDimensions;
}

export default useWindowDimension;