import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ToDoListItem(props) {
  
  const item = ({ item }) => (
    <View style={styles.list}>
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity
      onPress={() => props.deletItem(item.key)}
      >
        <View>
          <AntDesign name="delete" size={24} color="red" />
        </View>
      </TouchableOpacity>
    </View>
  );

  return <FlatList data={props.items} renderItem={item} />;
}

export default ToDoListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  list: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  
  text: {
    fontSize: 16,
  },
});
