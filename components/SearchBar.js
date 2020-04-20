import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const searchBar = props => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search"
      multiline={false}
      maxLength={50}
      value={props.filterValue}
      returnKeyType="search"
      textContentType="name"
      onChangeText={input => {
        props.setFilterValue(input);
      }}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "white",
    width: 200,
    height: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black"
  }
});
export default searchBar;
