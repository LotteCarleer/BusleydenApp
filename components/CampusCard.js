import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CampusCard = ({ title, description, image, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk campus </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 16,
    boxShadow: "1px 4px 6px rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 4,
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginTop: 4,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 7,
  },
  button: {
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,
  },
  buttonText: {
  color: "#7aaa25",
  fontSize: 16,
  fontWeight: "700",
  
  
},
});

export default CampusCard;