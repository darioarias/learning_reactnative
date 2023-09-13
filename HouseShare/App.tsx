import React from "react";

import {
  StyleSheet, Text, View, useColorScheme
} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello World! How are you?
        </Text>
      </View>
    )
  }
}


// const App = () => {
//   const styles = styleFactory(useColorScheme() as string)

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         Hello World! How are you?
//       </Text>
//     </View>
//   )
// }
// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.dark
  }
})

const styleFactory = function(colorMode: string): {container: {}, text: {}} {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorMode == "dark"? Colors.dark : Colors.white,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: colorMode == "dark"? Colors.white : Colors.dark
    }
  })
}

