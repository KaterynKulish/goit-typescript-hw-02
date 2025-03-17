import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Audio
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
};
export default Loader;
