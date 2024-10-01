import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅 추가
import Bottombar from "./Bottombar.js"; // Bottombar import
import { Switch } from "react-native-gesture-handler";
import { useState } from "react";
import SettingModal from './SettingModal.js';  // 모달 import 추가

export default function MySetting() {
  const navigation = useNavigation(); // useNavigation 훅으로 navigation 객체 가져오기

  //토글 스위치 상태 관리
  const [isChatEnabled, setIsChatEnabled] = useState(false);
  const [isCommunityEnabled, setIsCommunityEnabled] = useState(false);


  const [nickname, setNickname] = useState('어서옵쇼'); // Default nickname
   // 모달 가시성 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(require("../../assets/icon/mypage/ex.jpg")); // 기본 프로필 이미지
 
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topBtnContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()} // 뒤로가기 네비게이션
            >
              <Image
                source={require("../../assets/icon/back.png")}
                style={styles.backImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.topTitleContainer}>
            <Text style={styles.topFont}>설정</Text>
          </View>
          <View style={{ width: "15%" }}></View>
        </View>

        <View style={styles.myContainer}>
          <View style={styles.myImg}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Image
                source={profileImage}
                style={styles.backImg}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.myName}>
          <Text style={[{ fontSize: 16 }]}>{nickname} 님</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.menuBox}>
            <View style={styles.noneLineBox}>
              <Text style={[styles.menuFontBold, { marginTop: 10 }]}>계정</Text>
            </View>

            <TouchableOpacity style={styles.noneLineBox}   onPress={() => navigation.navigate("MyInfo")}>
              <Text style={styles.menuFont}>내 정보</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noneLineBox}>
              <Text style={styles.menuFont}>비밀번호 변경</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noneLineBox}>
              <Text style={styles.menuFont}>주소 변경</Text>
            </TouchableOpacity>

            <View style={styles.lineBox}>
              <Text style={styles.menuFontBold}>알림</Text>
            </View>


            <View style={styles.switchLineBox}>
              <Text style={styles.menuFont}>채팅 알림</Text>
              <Switch
                value={isChatEnabled}
                onValueChange={setIsChatEnabled}
              />
            </View>

            <View style={styles.switchLineBox}>
              <Text style={styles.menuFont}>커뮤니티 알림</Text>
              <Switch
                value={isCommunityEnabled}
                onValueChange={setIsCommunityEnabled}
              />
            </View>

            <View style={styles.lineBox}>
              <Text style={styles.menuFontBold}>기타</Text>
            </View>

            <TouchableOpacity style={styles.noneLineBox}>
              <Text style={styles.menuFont}>언어 설정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noneLineBox}  onPress={() => navigation.navigate("Login")}>
              <Text style={styles.menuFont}>로그아웃</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noneLineBox}>
              <Text style={[styles.menuFont,{marginBottom: 10}]}>탈퇴하기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Bottombar />
        <StatusBar style="auto" />
        <SettingModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}  // 모달 닫는 함수
          setNickname={setNickname}
          setProfileImage={setProfileImage}  // 이 부분을 추가하여 프로필 이미지 변경 함수 전달
        />

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
  topContainer: {
    width: "100%",
    height: "10%",
    paddingTop: 20,
    flexDirection: "row", // 이미지와 텍스트를 가로로 배치
  },
  topBtnContainer: {
    width: "15%",
  },
  topTitleContainer: {
    width: "70%",
  },
  myContainer: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
  },
  myImg: {
    width: "25%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: "5%",
  },
  myName: {
    width: "70%",
    justifyContent: "center",
    fontwei: "bold",
    fontSize: 16,
  },
  mainContainer: {
    width: "100%",
    height: "75%",
    alignItems: "center",
  },
  backImg: {
    height: 44,
    width: 44,
    justifyContent: "flex-start",
    borderRadius:22,
  },
  topFont: {
    fontSize: 20,
    marginTop: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  menuBox: {
    width: "90%",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 12,
    backgroundColor: "#fff",
  },
  menuFont: {
    fontSize: 15,
  },
  menuFontBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lineBox: {
    flexDirection: "row", // 이미지와 텍스트를 가로로 배치
    alignItems: "center", // 이미지와 텍스트를 수직으로 가운데 정렬
    padding: 10, // 패딩 추가로 터치 영역 확대
    paddingTop:16,
    marginHorizontal: 13,
    marginTop: 10,
    borderTopWidth: 1, // 각 메뉴 항목 아래에 구분선 추가
    borderTopColor: "#E5E5E5",
  },
  noneLineBox: {
    flexDirection: "row", // 이미지와 텍스트를 가로로 배치
    marginHorizontal: 13,
    alignItems: "center", // 이미지와 텍스트를 수직으로 가운데 정렬
    padding: 10, // 패딩 추가로 터치 영역 확대
  },
  switchLineBox: {
    flexDirection: "row",
    justifyContent: "space-between", // 텍스트와 스위치가 양 끝에 배치되도록 설정
    marginHorizontal: 10,
    alignItems: "center", // 스위치와 텍스트를 수직 가운데 정렬
    paddingHorizontal : 12
  },
});
