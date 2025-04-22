import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class GeolocationExample extends Component {
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
    error: null,
  };

  watchID = null;

  componentDidMount = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        this.setState({ initialPosition });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    this.watchID = Geolocation.watchPosition(
      (position) => {
        const lastPosition = JSON.stringify(position);
        this.setState({ lastPosition });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  componentWillUnmount = () => {
    if (this.watchID !== null) {
      Geolocation.clearWatch(this.watchID);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>Initial position:</Text>
        <Text>{this.state.initialPosition}</Text>
        <Text style={styles.boldText}>Current position:</Text>
        <Text>{this.state.lastPosition}</Text>
        {this.state.error && (
          <Text style={styles.errorText}>Error: {this.state.error}</Text>
        )}
      </View>
    );
  }
}

export default GeolocationExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
});