import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewExample = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://www.tutorialspoint.com/react_native/react_native_webview.htm',
        }}
      />
    </View>
  );
};

export default WebViewExample;

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
});
