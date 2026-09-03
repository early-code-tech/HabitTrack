import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../utils/colors";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Welcome to HabitTrack</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: COLORS.bgColor,
  },
  intro: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {},
  title: {
    fontSize: 20,
    color: "white",
  },
  btn: {},
  btnText: {},
});
