import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";


const CampusDetail = ({ route }) => {
  const { title, subtitle, image, content } = route.params;

const cleanContent = content
  ? content.replace(/<[^>]*>/g, "")
  : "";

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.body}>{cleanContent}</Text>

      <Text style={styles.sectionTitle}>
  Waarom kiezen voor onze campussen?
</Text>

<Text style={styles.benefits}>
  ✓ Moderne leslokalen{"\n"}
  ✓ Praktijkgerichte opleidingen{"\n"}
  ✓ Ervaren leerkrachten{"\n"}
  ✓ Persoonlijke begeleiding
</Text>
      

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f8e9",
    
  },
  
 
  
  title: {
       
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 10,
    textAlign: "left",

  },
  
  image: {
  
    marginLeft: 32,
    width: 350,
    height: 250,
    borderRadius: 8,
    marginTop: 20,
    boxShadow: "1px 4px 6px rgba(0, 0, 0, 0.3)",
   
  },
 
  subtitle:{
    
   fontSize: 20,
  marginBottom: 20,
   marginLeft: 25,
   marginRight: 25,

  },

  body: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,    
},
sectionTitle: {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 15,
  marginBottom: 10,
  marginLeft: 25,
  marginRight: 25,
},

benefits: {
  fontSize: 17,
  lineHeight: 30,
  marginLeft: 25,
  marginRight: 25,
  marginBottom: 40,
  padding: 15,
  backgroundColor: "#e8f2d8",
  borderRadius: 10,
},
 
});

export default CampusDetail;