import Lottie from 'react-lottie';
import loadingSpinnerData from './loading-spinner';

const LoadingSpinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingSpinnerData
  };

  return (
    <div style={{ padding: '100px 0' }}>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingSpinner;
