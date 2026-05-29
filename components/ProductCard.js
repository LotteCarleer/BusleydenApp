import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ title, description, price, image, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>€{price}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
      alignItems: "center",
    borderRadius: 10,
    marginBottom: 16,
    boxShadow: "1px 4px 6px rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: "100%",
    height: 200,
    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    color: "#86bc25",
     textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginTop: 4,
     textAlign: "center",
  },
  price: {
    fontSize: 18,
    marginTop: 6,
    fontWeight: "bold",
     textAlign: "center",

  },
   button: {
    backgroundColor: "#86bc25",
  paddingVertical: 10,
  paddingHorizontal: 28,
  borderRadius: 10,
  marginTop: 10,
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.45)",
  },
  buttonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
  fontWeight: "600",
  textAlign: "center",
},
});

export default ProductCard;