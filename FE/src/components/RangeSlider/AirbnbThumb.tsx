import { SliderThumb } from '@mui/material/Slider';

const AirbnbThumbComponent = props => {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
};

export default AirbnbThumbComponent;
