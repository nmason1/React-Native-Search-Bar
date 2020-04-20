import React from "react";
import { Text, FlatList, StyleSheet, View, Image } from "react-native";

import Data from "../info/Data";
import Color from "../colors/Color";

const dList = ({ filterValue }) => {
  //return section
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Data}
      renderItem={({ item }) => {
        if (
          item.name.first.includes(filterValue) ||
          item.name.last.includes(filterValue)
        ) {
          return (
            <View style={styles.listStyle}>
              <View
                style={{
                  flexDirection: "row",
                  width: 30
                }}
              >
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                    borderRadius: 15,
                    borderWidth: 1.5,
                    borderColor: "#dd37e6"
                  }}
                  source={{
                    uri: item.picture.thumbnail
                  }}
                />
              </View>
              <View>
                <Text style={styles.listName}>{item.name.first}</Text>
                <Text style={{ fontSize: 15, color: "white", paddingLeft: 40 }}>
                  {item.email}
                </Text>
              </View>
            </View>
          );
        }
      }}
    ></FlatList>
  );
};

//styling
const styles = StyleSheet.create({
  listName: {
    color: "white",

    fontSize: 20,

    fontSize: 20,
    width: 300,
    paddingLeft: 40
  },
  listStyle: {
    padding: 15,
    width: "100%",
    borderWidth: 0.5,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.secondary,
    borderRadius: 5,
    shadowRadius: 2,
    shadowOffset: { width: 5, height: 1.7 },
    marginBottom: 15,
    marginTop: 10,
    shadowColor: "#dd37e6",
    shadowOpacity: 2
  }
});
export default dList;
