import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#E5E5E5'
  },
  header: {
    backgroundColor: "#FFD800",
    height: '17%',
    minHeight: 150,
    maxHeight: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    padding: '5%'
  },
  popup: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 6,
    padding: 35,
    alignItems: 'center',
    maxWidth: 500
  },
  text1: {
    fontSize: 28,
    color: '#113570',
    textAlign: 'center',
    paddingBottom: 25
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
    color: '#113570'
  },
  vplogo: {
    marginTop: 35
  }
});

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#FFD800" />
        <View style={styles.header}>
          <Image source={ require( './assets/mtlogo.png' ) } />
        </View>
        <View style={styles.body}>
          <View style={styles.popup}>
            <Text style={styles.text1}>Мы переезжаем!</Text>
            <Text style={styles.text2}>Как заказать любимый товар, если его еще нет на vprok.ru, а наша площадка уже закрыта?</Text>
            <Text style={styles.text2}>Подождать - товары загружаются постепенно, скоро большая часть ассортимента будет доступна на vprok.ru </Text>
            <Image style={styles.vplogo} source={ require( './assets/vplogo.png' ) } />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default App;
