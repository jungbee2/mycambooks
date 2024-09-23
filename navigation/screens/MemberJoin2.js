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
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅 추가
import { useState } from "react"; // useState 훅 추가

export default function MemberJoin2() {
  const navigation = useNavigation(); // useNavigation 훅으로 navigation 객체 가져오기
  const [inputCode, setInputCode] = useState(""); // 인증번호 입력 상태 관리
  const correctCode = "123456"; // 하드코딩된 올바른 인증번호

  // 확인 버튼 클릭 핸들러
  const handleConfirm = () => {
    if (inputCode === correctCode) {
      Alert.alert("", "인증번호가 확인되었습니다.", [
        { text: "확인", onPress: () => navigation.navigate("Login") },
      ]);
    } else {
      Alert.alert("", "인증번호가 다릅니다.", [
        { text: "확인", onPress: () => console.log("인증번호 틀림") },
      ]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.topContainer}
          onPress={() => navigation.goBack()} // 뒤로가기 네비게이션
        >
          <Image
            source={require("../../assets/icon/back.png")}
            style={styles.backImg}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.mainFont}>학교 이메일 인증이</Text>
          <Text style={styles.mainFont}>필요해요.</Text>
        </View>

        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            placeholder="학교이메일을 입력해주세요."
          />
          <TouchableOpacity
            style={styles.mainbtn}
            onPress={() => navigation.navigate("MemberJoin2")}
          >
            <Text style={styles.btnfont}>인증번호 전송</Text>
          </TouchableOpacity>

          <View style={styles.ckContainer}>
            <TextInput
              style={styles.ckInput}
              placeholder="인증번호를 입력해주세요."
              value={inputCode}
              onChangeText={setInputCode} // 입력된 텍스트 상태 업데이트
            />
            <TouchableOpacity style={styles.smallbtn} onPress={handleConfirm}>
              <Text style={styles.btnfont}>확인</Text>
            </TouchableOpacity>
          </View>
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
  },
  topContainer: {
    width: "100%",
    height: "15%",
    paddingTop: 70,
    paddingLeft: 25,
    justifyContent: "center", // 수직 가운데 정렬
  },
  textContainer: {
    width: "100%",
    height: "20%",
    paddingHorizontal: 40,
    paddingTop: 10,
    marginTop: 50,
  },
  InputContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  ckContainer: {
    width: "100%",
    flexDirection: "row", // 수평 정렬
    alignItems: "center", // 수직 가운데 정렬
    justifyContent: "center", // 가운데 정렬
    marginVertical: 40, // 위아래 여백 추가
  },
  backImg: {
    height: 46,
    width: 46,
  },
  mainFont: {
    fontSize: 25,
    fontWeight: "900",
    textAlign: "left",
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
  ckInput: {
    backgroundColor: "#F7F7F7",
    width: "56%",
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
  smallbtn: {
    backgroundColor: "#67574D",
    marginLeft: 10,
    paddingVertical: 13.5,
    paddingHorizontal: 31,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnfont: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
