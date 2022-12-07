import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from 'react-native-super-grid'
import axios from "axios";
import link from "../Link"


const HomePageStudent = () => {
const navigation = useNavigation();
 
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios.get(`${link}/house/`).then((res)=>{
      setItems(res.data)
      console.log(items,'items')}) 

  },[])

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
       
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item}) => (
        <Pressable onPress={()=>navigation.navigate("Detail",{id:item.idhouse})}>
        <View style={[styles.itemContainer, { backgroundColor: "#C1C9CC" }]}>
          <Text style={styles.itemName}>{item.price}</Text>
          <Image
          style={styles.images1Icon}
          resizeMode="cover"
          source={{uri:item.photo}}/>
          <Text style={styles.itemCode}>{item.city}</Text>
        </View>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({

  gridView: {
    marginTop: 65,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 20,
    padding: 10,
    height: 180,
    marginTop:8
    
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    top:140,
    left:110
  },  
  itemCode: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
    top:6
  },
  images1Icon: {
       position: "relative",
       top: -15,
       left: -10,
       width: 173,
       height: 117,  
     },
});

export default HomePageStudent;
