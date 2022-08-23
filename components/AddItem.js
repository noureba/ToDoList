import React, {useState} from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function AddItem(props) {
  const [text, setText] = useState('');

  const saveChange = (val) => {
    setText(val);
  };

  const addItem = ()=>{
    setText('')
    props.addItem(text)
  }

  return (
    <View style={styles.todoInput}>
      <TextInput
        placeholder="Enter To Do ..."
        placeholderTextColor="white"
        style={styles.input}
        value={text}
        onChangeText={saveChange}
      />
      <TouchableOpacity onPress={addItem}>
        <View>
          <FontAwesome name="send" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AddItem;

const styles = StyleSheet.create({
  todoInput: {
    padding: 10,
    backgroundColor: "orange",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    color: "white",
    fontSize: 18,
    width:'80%'
  },
});
