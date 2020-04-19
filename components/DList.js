import React from "react";
import { Text, FlatList, StyleSheet, View, Image } from "react-native";

import Data from "../info/Data";
import _ from "lodash";

const dList = ({ filterValue }) => {
  //return section
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Data}
      renderItem={({ item }) => {
        return Data.map(value => {
          if (
            value.name.first.includes(filterValue) ||
            value.name.last.includes(filterValue)
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
                      borderRadius: 15
                    }}
                    source={{
                      uri: value.picture.thumbnail
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.listName}>
                    {value.name.first} {"\n"}
                  </Text>
                  <Text style={{ fontSize: 15, color: "white" }}>
                    {item.email}
                  </Text>
                </View>
              </View>
            );
          }
        });
      }}
    ></FlatList>
  );
};

//styling
const styles = StyleSheet.create({
  listName: {
    color: "white",

    fontSize: 20,

    fontSize: 20
  },
  listStyle: {
    padding: 15,
    width: "100%",
    borderWidth: 2,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black"
  }
});
export default dList;
