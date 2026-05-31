import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TextInput, Switch, View, TouchableOpacity,} from "react-native";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.js";
import BlogCard from "../components/BlogCard.js";
import CampusCard from "../components/CampusCard.js";
import { Picker } from "@react-native-picker/picker";

const categoryNamesProducts = {
  "": "Alle categoriën",
  "6a0b727b3654afcf3d03cf4d": "Kleding",
  "6a0b728a29b5d29cf15f96b0": "Baby",
  "6a0b72c83c5d6661d2bf518b": "Lunchmateriaal",
  "6a0b72daeafee951ced5f602": "gadgets",
  "6a0b731399dbcda1ccb21d6b": "Onderweg",
 
};

const categoryNamesBlogs = {
 "": "Alle categoriën",
 "6a0cc0442b7ecd8bf3a91db0": "Activiteit",
 "6a0cc056b16912be5dc757f6": "Infrastructuur",
 "6a0cc0788981edb69a3ed956": "Evenement",
}

//Test

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [campussen, setCampussen] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  const [selectedBlogCategory, setSelectedBlogCategory] = useState("");
const [blogSortOption, setBlogSortOption] = useState("name-asc");

  const [showBlogs, setShowBlogs] = useState(true);


  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/6a0b57adef4eb806ebc94d61/products", //API product list
      {
        headers: {
          Authorization:
            "Bearer 962b44ba8ef347478b6ee583c7a4498889ad64d06687d89b5d1ab2a0cd0f212a",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(JSON.stringify(data.items[0], null, 2));
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
            category:
              categoryNamesProducts[item.product.fieldData.category[0]] ||
              "Onbekende categorie",
          })),
        );
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a,b)=> {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  const filteredBlogs = blogs.filter(
  (blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedBlogCategory === "" ||
      blog.category === selectedBlogCategory)
);

const sortedBlogs = [...filteredBlogs].sort((a, b) => {
  if (blogSortOption === "name-asc") {
    return a.title.localeCompare(b.title);
  }

  if (blogSortOption === "name-desc") {
    return b.title.localeCompare(a.title);
  }

  return 0;
});

const filteredCampussen = campussen.filter((campus) =>
  campus.title.toLowerCase().includes(searchQuery.toLowerCase())
);
  
  //blogs
  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a0caf25a89f5bb5d859bb78/items",
      {
        headers: {
          authorization:
            "Bearer 962b44ba8ef347478b6ee583c7a4498889ad64d06687d89b5d1ab2a0cd0f212a",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(
          data.items.map((item) => ({
              
            
            id: item.id,
            title: item.fieldData.name,
            subtitle: item.fieldData["post-summary"],
            content: item.fieldData["post-body"],
            image: { uri: item.fieldData["main-image"]?.url },

            category:
            categoryNamesBlogs[item.fieldData.categorien?.[0]] ||
            "Onbekende categorie",
          })),
        );
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []); 

//campussen
    useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/collections/6a0cd5672da739c98ccffe1d/items",
      {
        headers: {
          authorization:
            "Bearer 962b44ba8ef347478b6ee583c7a4498889ad64d06687d89b5d1ab2a0cd0f212a",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setCampussen(
          data.items.map((item) => ({
            id: item.id,
            title: item.fieldData.name,
            subtitle: item.fieldData["post-summary"],
            content: item.fieldData["post-body"],
            image: { uri: item.fieldData["main-image"]?.url },
          })),
        );
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []); 


  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Producten</Text>

      <TextInput
        style={styles.search}
        placeholder="Zoek een product..."
        placeholderTextColor="#79aa25c0"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.switchContainer}>
        <Text  style={styles.switchText}>Toon blogs</Text>
       <Switch value={showBlogs} onValueChange={setShowBlogs} trackColor={{ false: "#ccc", true: "#7aaa25" }} thumbColor={showBlogs ? "#fff" : "#f4f3f4"} />
      </View>

      <View style={styles.pickerContainer}>

      <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={styles.picker}
      >
        <Picker.Item label="Alle categorieën" value="" />
        <Picker.Item label="Kleding" value="Kleding" />
        <Picker.Item label="Baby" value="Baby" />
        <Picker.Item label="Lunchmateriaal" value="Lunchmateriaal" />
        <Picker.Item label="gadgets" value="gadgets" />
        <Picker.Item label="Onderweg" value="Onderweg" />
      </Picker>
      </View>

      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
      >
        <Picker.Item label="Prijs oplopend" value="price-asc" />
        <Picker.Item label="Prijs aflopend" value="price-desc" />
        <Picker.Item label="Naam A-Z" value="name-asc" />
        <Picker.Item label="Naam Z-A" value="name-desc" />
      </Picker>
      </View>

      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.subtitle}
          price={product.price}
          image={product.image}
          onPress={() => navigation.navigate("Details", product)}
        />
      ))}

      {showBlogs && (
  <>
    <Text style={styles.title}>Blogs</Text>

    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedBlogCategory}
        onValueChange={setSelectedBlogCategory}
        style={styles.picker}
      >
        <Picker.Item label="Alle categorieën" value="" />
        <Picker.Item label="Activiteit" value="Activiteit" />
        <Picker.Item label="Infrastructuur" value="Infrastructuur" />
        <Picker.Item label="Evenement" value="Evenement" />
      </Picker>
    </View>

    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={blogSortOption}
        onValueChange={setBlogSortOption}
        style={styles.picker}
      >
        <Picker.Item label="Naam A-Z" value="name-asc" />
        <Picker.Item label="Naam Z-A" value="name-desc" />
      </Picker>
    </View>

    {sortedBlogs.map((blog) => (
      <BlogCard
        key={blog.id}
        title={blog.title}
        description={blog.subtitle}
        image={blog.image}
        onPress={() => navigation.navigate("BlogDetail", blog)}
      />
    ))}
  </>
)}

      <Text style={styles.title}>Campussen</Text>

{filteredCampussen.map((campus) => (
  <CampusCard
    key={campus.id}
    title={campus.title}
    description={campus.subtitle}
    image={campus.image}
    onPress={() => navigation.navigate("CampusDetail", campus)}
  />
))}

<TouchableOpacity
  style={styles.gameButton}
  onPress={() => navigation.navigate("SchoolGame")}
>
  <Text style={styles.gameButtonText}>🎮 Speel de School Game</Text>
</TouchableOpacity>

      

      

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
    padding: 20,
    gap: 20,
    alignItems: "center",
    paddingBottom: 40,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
  },
  search: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#7aaa25",
    fontSize: 16,
  
  },
  pickerContainer: {
      width: "90%",
  maxWidth: 400,
  backgroundColor: "#7aaa25",
  borderRadius: 15 ,
  overflow: "hidden",
  elevation: 5,
  fontSize: 18,
  },
 

  picker: {
       color: "#fff",
       
  },

  
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: 400,
    
  },
  switchText: {
  fontSize: 18,      
  fontWeight: "600", 
  color: "#222",
},
gameButton: {
  backgroundColor: "#7aaa25",
  padding: 15,
  borderRadius: 10,
  marginTop: 20,
  width: "90%",
},

gameButtonText: {
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 18,
},

});

export default HomeScreen;