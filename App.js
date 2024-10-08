import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, View, Text, ScrollView, StyleSheet } from "react-native";

// Create the Stack Navigator
const Stack = createStackNavigator();

// Home Screen Component with Image Gallery
function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Welcome to Persian Nan Bakery!</Text>
      <Text
        style={styles.aboutLink}
        onPress={() => navigation.navigate("About")}
      >
        Learn more about us
      </Text>

      {/* Display multiple images */}
      <Image
        source={require("./assets/IMAGE2.jpg")} // Adjust the path to your local image
        style={styles.image}
      />
      <Image source={require("./assets/IMAGE3.jpg")} style={styles.image} />
      <Image source={require("./assets/IMAGE4.jpg")} style={styles.image} />
      <Image source={require("./assets/IMAGE5.jpg")} style={styles.image} />
      <Image source={require("./assets/IMAGE6.jpg")} style={styles.image} />
      <Image source={require("./assets/IMAGE7.jpg")} style={styles.image} />
      <Image source={require("./assets/IMAGE8.jpg")} style={styles.image} />
    </ScrollView>
  );
}

// About Screen Component
function AboutScreen() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>About Us</Text>
      <Text>
        We specialize in traditional Persian bread made with high-quality
        ingredients. Our bakery is dedicated to bringing the authentic flavors
        of Persia to your table.
      </Text>
    </View>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  aboutLink: {
    fontSize: 18,
    color: "blue",
    marginTop: 20,
    textDecorationLine: "underline",
  },
  aboutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  aboutText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
