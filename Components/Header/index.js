import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

const Header = props => (
  <View>
    {/* component View pour créer des conteneurs */}
    <View style={styles.subHeader} />
    <View>
      <Text>{props.titre_header}</Text>
    </View>
  </View>
);

export default Header;
