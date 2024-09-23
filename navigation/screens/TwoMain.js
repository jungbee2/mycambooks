import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅 추가
import Bottombar from "./Bottombar.js"; // Bottombar import

export default function TwoMain() {
  const navigation = useNavigation(); // useNavigation 훅으로 navigation 객체 가져오기

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.font}>2번째 메인</Text>
        <Bottombar />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // ScrollView가 화면 전체를 차지하게 설정
  },
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
