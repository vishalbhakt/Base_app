import React from 'react';
import { SafeAreaView } from 'react-native';
import GeolocationExample from './geolocation_example';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GeolocationExample />
    </SafeAreaView>
  );
};

export default App;