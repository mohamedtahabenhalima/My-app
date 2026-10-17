import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import product from '../product';



const ProductScreen=()=>{
  const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image
      source={{ uri: item.image }}
      style={styles.image}
    />
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.price}>{item.price} €</Text>
  </View>
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:'100%',
    aspectRatio:1,
  },
  itemContainer:{
    width:"50%",
    padding:1,
  }
});

export default ProductScreen;