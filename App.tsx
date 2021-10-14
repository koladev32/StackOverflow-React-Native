/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Header, Icon} from 'react-native-elements';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <Header backgroundColor={'#232629'}>
        <View
          style={{
            flexDirection: 'row',
            width: 96,
          }}>
          <Icon name={'bars'} color={'#fff'} type={'font-awesome-5'} />
          <Icon
            name={'stack-overflow'}
            type={'font-awesome-5'}
            color={'orange'}
            style={{
              marginLeft: '25%',
              bottom: 5
            }}
            size={28}
          />
          <Text style={{
            color: '#fff',
            maxWidth: 95,
            textAlign: "left",
            textAlignVertical: "center",
            bottom: '1%'
          }}>
            Stack Overflow
          </Text>
        </View>
      </Header>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
