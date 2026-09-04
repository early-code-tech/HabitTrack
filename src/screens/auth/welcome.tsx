import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../utils/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthStack } from "../../utils/types";

type welcomeProp = NavigationProp<AuthStack, "Welcome">;

export default function Welcome() {
  const navigation = useNavigation<welcomeProp>();
  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Welcome to HabitTrack</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Signup")}
      >
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
  img: {
    width: wp("60%"),
    height: hp("30%"),
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: "Bold",
  },
  btn: {
    width: wp("80%"),
    height: hp("7%"),
    backgroundColor: COLORS.altColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 5,
    // add the corresponding shadow for IOS
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Medium",
  },
});

// https://github.com/Ghost-cyber27/HabitTrack
