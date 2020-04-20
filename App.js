import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Color from "./colors/Color";
import SeachBar from "./components/SearchBar";
import DList from "./components/DList";

export default function App() {
  const [filterValue, setFilterValue] = useState("");

  function handleFilter(value) {
    setFilterValue(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SeachBar filterValue={filterValue} setFilterValue={handleFilter} />
      </View>
      <View style={{ padding: 20, marginTop: 20 }}>
        <DList filterValue={filterValue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    alignItems: "center"
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 200
  },
  searchBarContainer: { marginTop: 100 }
});
