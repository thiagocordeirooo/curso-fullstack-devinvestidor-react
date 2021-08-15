import Lottie from 'react-lottie';
import EmptyBoxData from './empty-box';
import Typography from '@material-ui/core/Typography';

const EmptyBox = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyBoxData
  };

  return (
    <div style={{ padding: '32px 0' }}>
      <Lottie options={defaultOptions} height={200} width={200} />
      <Typography align="center" color="textSecondary">
        Nenhum registro encontrado.
      </Typography>
    </div>
  );
};

export default EmptyBox;
