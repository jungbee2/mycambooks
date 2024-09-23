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

export default function MemberJoin() {
  const navigation = useNavigation(); // useNavigation 훅으로 navigation 객체 가져오기

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
          <Text style={styles.mainFont}>최고의 거래를 할</Text>
          <Text style={styles.mainFont}>준비가 되셨나요?</Text>
        </View>
        <View style={styles.InputContainer}>
          <TextInput style={styles.input} placeholder="이름을 입력해주세요." />

          <View style={styles.idContainer}>
            <TextInput
              style={styles.idInput}
              placeholder="아이디를 입력해주세요."
            />
            <TouchableOpacity style={styles.smallbtn}>
              <Text style={styles.btnfont}>중복 확인</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry
          />
          <Text style={styles.redfont}>영문, 숫자, 특수문자 포함 8자 이상</Text>

          <TextInput
            style={styles.input}
            placeholder="비밀번호를 다시 입력해주세요."
            secureTextEntry
          />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.mainbtn}
            onPress={() => navigation.navigate("MemberJoin2")}
          >
            <Text style={styles.btnfont}>다음</Text>
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
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  idContainer: {
    width: "100%",
    flexDirection: "row", // 수평 정렬
    alignItems: "center", // 수직 가운데 정렬
    justifyContent: "center", // 가운데 정렬
    marginVertical: 10, // 위아래 여백 추가
  },
  bottomContainer: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainFont: {
    fontSize: 25,
    fontWeight: "900",
    textAlign: "left",
  },
  backImg: {
    height: 46,
    width: 46,
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
  idInput: {
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
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnfont: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  redfont: {
    color: "red",
    fontSize: 12,
    width: "80%",
    textAlign: "right",
    marginVertical: 6,
  },
});
