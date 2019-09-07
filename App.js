import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Notifications } from 'expo';
import * as Permission from 'expo-permissions';

registerForPushNotificationAsync = async () => {
  const { status: existingStatus } = await Permission.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingState;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
