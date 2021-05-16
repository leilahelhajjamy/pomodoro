import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import { colors } from "../../utils/Colors";
import { buttonOpen, bar, textRight, textLeft } from "../../utils/Style";
export const Sounds = ({ onSetSound }) => {
  const [sound, setSound] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "beep",
      source: require("../../../assets/beep.wav"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "cheer",
      source: require("../../../assets/cheer.wav"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "classic-alarm",
      source: require("../../../assets/classic_alarm.wav"),
    },
    {
      id: "5869sff-3da1-471f-bd96fee45571e29d72",
      title: "dog",
      source: require("../../../assets/dog.wav"),
    },
    {
      id: "58694a0f-3da1-aaa471fdzz-145571e29d72",
      title: "flute",
      source: require("../../../assets/flute.wav"),
    },
    {
      id: "58694azdezzzr471f-bd96-145571e29d72",
      title: "game",
      source: require("../../../assets/game.wav"),
    },
    {
      id: "58694a0f-3da1-dzdfscs145571e29d72",
      title: "rain",
      source: require("../../../assets/rain.wav"),
    },
    {
      id: "58694a0f-3dazddddefe145571e29d72",
      title: "tick",
      source: require("../../../assets/tick.wav"),
    },
    {
      id: "58694a0f-3dasaaa145571e29d72",
      title: "tropical",
      source: require("../../../assets/tropical.wav"),
    },
  ];
  const Item = ({ title, source }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => playSound(title, source)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} source={item.source} />
  );
  async function playSound(title, source) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(source);
    setSound(title);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  const handleSound = () => {
    onSetSound(sound);
  };

  return (
    <View style={styles.container}>
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
                handleSound();
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
        <Text style={styles.textLeft}>Sound</Text>
        <Text style={styles.textRight}>Show Modal</Text>
      </TouchableOpacity>
      <View style={styles.bar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  bar: bar,
});
