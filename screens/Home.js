import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import ToDoListItem from "../components/ToDoListItem";
import AddItem from "../components/AddItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Home() {
  const [data, setData] = useState([]);

  const deletItem = (key) => {
    setData((prevData) => {
      return prevData.filter((item) => item.key != key);
    });
  };

  const addItem = (text) => {
    setData((prevData) => {
      return [...prevData, { key: Math.random().toString(), text: text }];
    });
  };

  return (
    <Layout>
      <View style={styles.container}>
        {data.length == 0 ? (
          <View style={styles.empty}>
            <Text style={{fontSize:30}}>Empty</Text>
            <View>
              <MaterialCommunityIcons
                name="sticker-emoji"
                size={200}
                color="black"
              />
            </View>
          </View>
        ) : (
          <ToDoListItem items={data} deletItem={deletItem} />
        )}
      </View>
      <AddItem addItem={addItem} />
    </Layout>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
  empty:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
