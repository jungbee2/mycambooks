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

export default function Login() {
  const navigation = useNavigation(); // useNavigation 훅으로 navigation 객체 가져오기

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={styles.logoImg}
          />
          <Text style={styles.logofont}>캠북스</Text>
        </View>

        <View style={styles.loginContainer}>
          <TextInput style={styles.input} placeholder="아이디"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            secureTextEntry
          ></TextInput>
          <TouchableOpacity
            style={styles.mainbtn}
            onPress={() => navigation.navigate("OneMain")}
          >
            <Text style={styles.btnfont}>로그인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linkContainer}>
          <Text style={styles.linkfont}>아이디 찾기</Text>
          <Text style={styles.linkfont}>|</Text>
          <Text style={styles.linkfont}>비밀번호 찾기</Text>
          <Text style={styles.linkfont}>|</Text>
          <TouchableOpacity onPress={() => navigation.navigate("MemberJoin")}>
            <Text style={styles.linkfont}>회원가입</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.guestContainer}>
          <TouchableOpacity
            style={styles.subbtn}
            onPress={() => navigation.navigate("GuestFiveMain")}
          >
            <Text style={styles.btnfont}>게스트로 이용하기</Text>
          </TouchableOpacity>
        </View>

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    marginTop: 150,
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  logofont: {
    fontSize: 30,
    color: "#67574D",
    fontWeight: "bold",
    padding: 5,
  },
  loginContainer: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  linkContainer: {
    width: "100%",
    height: "8%",
    flexDirection: "row", // 수평 정렬
    justifyContent: "center", // 가운데 정렬
    alignItems: "center", // 가운데 정렬
  },
  linkfont: {
    fontSize: 13,
    color: "#808080",
    marginHorizontal: 10, // 텍스트 사이에 간격 추가
  },
  guestContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  input: {
    backgroundColor: "#F7F7F7",
    width: "80%",
    height: 45,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  mainbtn: {
    backgroundColor: "#67574D",
    width: "80%",
    marginVertical: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  btnfont: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  subbtn: {
    backgroundColor: "#D0D1D1",
    width: "80%",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
});
