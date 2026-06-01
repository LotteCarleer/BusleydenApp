import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";

export default function CartScreen({
    cartItems,
    setCartItems,

}) {
  
    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalPrice = cartItems.reduce(
        (total, item) => 
            total + item.price * item.quantity, 0);

        const handlePayment = () => {
            setOrderPlaced(true);
            setCartItems([]);
        };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Winkelmandje</Text>

            {cartItems.length === 0 && !orderPlaced && (
                <Text style={styles.emptyText}>
                    Je winkelmandje is leeg.</Text>
            )}

            {!orderPlaced && cartItems.map((item, index) => (
                <View key={index} 
                style={styles.productCard}>
                
                <Text style={styles.productTitle}>
                    {item.title}</Text>

                <Text>
                    Aantal: {item.quantity}
                </Text>

                <Text>
                    Prijs per stuk: €{item.price.toFixed(2)}
                </Text>

                <Text style={styles.productTotal}>

                Subtotaal: €
                {(item.price * item.quantity).toFixed(2)}
                </Text>
                </View>
            ))}

            {cartItems.length > 0 &&
        !orderPlaced && (
          <>
            <Text style={styles.totalPrice}>
              Totaal: €
              {totalPrice.toFixed(2)}
            </Text>

            <TouchableOpacity
              style={styles.payButton}
              onPress={handlePayment}
            >
              <Text style={styles.payButtonText}>
                Bestelling betalen
              </Text>
            </TouchableOpacity>
          </>
        )}

      
      {orderPlaced && (
        <View style={styles.successBox}>
          <Text style={styles.successTitle}>
            ✅ Bestelling geslaagd!
          </Text>

          <Text style={styles.successText}>
            Bedankt voor je bestelling.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

  


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f2f8e9",
    flexGrow: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },

  
  emptyText: {
    fontSize: 18,
    marginTop: 20,
  },


  productCard: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  },

  
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#7aaa25",
  },

  
  productTotal: {
    marginTop: 8,
    fontWeight: "bold",
  },

  
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },

  
  payButton: {
    backgroundColor: "#7aaa25",
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },

  
  payButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  
  successBox: {
    backgroundColor: "#d4edda",
    padding: 25,
    borderRadius: 15,
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },

  
  successTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2e7d32",
  },

  
  successText: {
    fontSize: 18,
    textAlign: "center",
  },
});