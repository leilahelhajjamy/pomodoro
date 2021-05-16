import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import { colors } from "../../utils/Colors";
import { buttonOpen, bar, textLeft, textRight } from "../../utils/Style";
export const DurationSound = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      duration: "1 minute",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      duration: "5 minutes",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      duration: "10 minutes",
    },
    {
      id: "5869sff-3da1-471f-bd96fee45571e29d72",
      duration: "15 minutes",
    },
    {
      id: "58694a0f-3da1-aaa471fdzz-145571e29d72",
      duration: "20 minutes",
    },
    {
      id: "58694azdezzzr471f-bd96-145571e29d72",
      duration: "30 minutes",
    },
  ];

  const Item = ({ duration }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => console.log(duration)}>
        <Text style={styles.title}>{duration}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({ item }) => <Item duration={item.duration} />;
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sonnerie</Text>
            <SafeAreaView>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textLeft}>Duration</Text>
        <Text style={styles.textRight}>Show Modal</Text>
      </TouchableOpacity>
      <View style={styles.bar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOpen: buttonOpen,
  bar: bar,
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: -120,
  },
  modalView: {
    width: "90%",
    height: "70%",
    backgroundColor: colors.bgLight,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: buttonOpen,

  buttonClose: {
    backgroundColor: colors.blue,
    marginTop: -80,
  },
  textLeft: textLeft,
  textRight: textRight,
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  item: {
    height: 40,
    backgroundColor: colors.bgDarker,
    width: 250,
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
  },
});
