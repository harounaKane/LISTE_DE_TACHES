import React from 'react';
import Header from './Components/Header';

export default class App extends React.Component {
  render () {
    // <Header /> => components customs
    // titre_header => props (proprétés)
    return <Header titre_header="Liste de tâches" />;
  }
}
