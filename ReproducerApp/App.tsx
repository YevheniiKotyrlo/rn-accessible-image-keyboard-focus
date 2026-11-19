/**
 * An accessible Image between two buttons, kept out of keyboard focus with focusable={false}, and another with
 * tabIndex={-1}. With a hardware keyboard, Tab from the first button should go to the second button.
 *
 * @format
 */

import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const logo = require('./logo.png');

function Button({ label }: { readonly label: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <Pressable
      accessibilityLabel={label}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={[styles.button, focused && styles.focused]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.caption}>
        Press Tab with a hardware keyboard. From the first button, Tab
        should go to the second button.
      </Text>
      <Button label="first button" />
      <Image
        accessible
        accessibilityLabel="logo with focusable false"
        focusable={false}
        source={logo}
        style={styles.image}
      />
      <Image
        accessible
        accessibilityLabel="logo with tabIndex -1"
        tabIndex={-1}
        source={logo}
        style={styles.image}
      />
      <Button label="second button" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 64,
    gap: 16,
  },
  caption: {
    color: 'black',
    fontSize: 16,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  focused: {
    borderColor: '#d81b60',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  image: {
    width: 96,
    height: 96,
  },
});

export default App;
