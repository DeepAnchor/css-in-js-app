import { createComponent } from 'react-fela';
import colors from '../../utils/colors';
import config from '../../config';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(((i / 10) % 1) * 10);

  const component = createComponent(
    props => ({
      border: `${size + 2}px solid #000`,
      borderRadius: `${size * 6}px`,
      borderColor: props.isPrimary ? colors[props.i][0] : colors[props.i][1],
      '&:hover': {
        backgroundColor: 'white !important',
        borderColor: 'black !important',
        color: 'black',
      },
    }),
    Block
  );

  components.push(component);
}

export default components;
