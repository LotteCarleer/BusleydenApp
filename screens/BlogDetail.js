import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";


const BlogDetail = ({ route }) => {
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
      

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f8e9",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "left",

  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginTop: 20,
    boxShadow: "1px 4px 6px rgba(0, 0, 0, 0.3)",
   
  },
 
  subtitle:{
   textAlign: "center",
   fontSize: 18,
  
   marginBottom: 20,
   marginLeft: 25,
   marginRight: 25,

  },

  body:{
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 25,
     marginRight: 25,


  },
 
});

export default BlogDetail;