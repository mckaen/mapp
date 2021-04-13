import React from 'react'
import type {Node} from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'

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
    padding: '5%',
    backgroundColor: "#fff"
  },
  popup: {
    backgroundColor: '#E7F3EE',
    width: '100%',
    borderRadius: 6,
    padding: 35,
    alignItems: 'center',
    maxWidth: 500
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#113570',
    textAlign: 'center',
    paddingBottom: 25
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
    color: '#113570'
  },
  text3: {
    fontSize: 18,
    textAlign: "center",
    color: '#18A651',
    marginTop: 60
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
				backgroundColor="#FFD800"
			/>
			<View style={styles.header}>
				<Image source={ require( './assets/mtlogo.png' ) } />
			</View>
			<View style={styles.body}>
				<View style={styles.popup}>
					<Text style={styles.text1}>Сайт mytoys.ru переезжает и становится частью vprok.ru!</Text>
					<Text style={styles.text2}>
						<Text style={ { fontWeight: "bold" } }>Как заказать любимый товар, если его еще нет на vprok.ru?</Text>
						<Text> Подождать - товары загружаются постепенно.</Text>
					</Text>
					<Text style={styles.text3}>
						<Text>Скоро большая часть ассортимента будет доступна на </Text>
						<Text style={{fontWeight: "bold"}}>vprok.ru</Text>
					</Text>
					<Image style={styles.vplogo} source={ require( './assets/vplogo.png' ) } />
				</View>
			</View>
		</SafeAreaView>
	)
}

export default App;
