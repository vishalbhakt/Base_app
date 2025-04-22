import React from 'react';
import { Image, View } from 'react-native';

const ImagesExample = () => (
  <View>
    {/* ✅ Remote image using URI */}
    <Image
      source={{ uri: 'https://miro.medium.com/v2/resize:fit:1200/0*5Cke19b5MtU2WL5i.png' }}
      style={{ width: 400, height: 200, marginBottom: 20 }}
    />

    {/* ✅ Local image - must be relative path, placed inside your project like ./assets/ */}
    
    <Image
      source={require('/home/vishal-kumar-bhakt/app/MyFirstApp/assets/dj.png')}
      style={{ width: 200, height: 200 }}
    />
   
  </View>
);

export default ImagesExample;
