import React from 'react';
import {Text} from 'react-native';

const Header = props => <Text>{props.titre_header}</Text>;

// destructuration.
/* 
const Header = ({titre_header}) => <Text>{titre_header}</Text>; 
*/
export default Header;
