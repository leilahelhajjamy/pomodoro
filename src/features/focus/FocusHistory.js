import React from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/Colors";

export const FocusHistory = ({ focusHistory, onClear }) => {
  const renderItem = ({ item, index }) => {
    console.log(item);
    return <Text style={styles.historyItem(item.status)}> {item.subject}</Text>;
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {focusHistory.length ? (
          <FlatList
            contentContainerStyle={{ flex: 1, alignItems: "center" }}
            data={focusHistory}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
          />
        ) : (
          <></>
        )}
        <View>
          <RoundedButton size={40} title="clear" onPress={onClear} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
  }),
});
