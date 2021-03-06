import rockey from 'rockey-react';
import colors from '../../utils/colors';

export default rockey.div('Block')`
  min-width: 16px;
  height: 16px;
  display: inline-block;
  text-align: center;
  padding: 15px;
  border: none;
  font-weight: bold;
  background-color: ${props =>
    props.isPrimary ? colors[props.i][1] : colors[props.i][0]};
  :hover {
    background-color: black !important;
    color: white;
  }
`;
