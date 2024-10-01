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
import { useState } from "react";

export default function MyInfo() {
  const navigation = useNavigation(); // useNavigation 훅으로 navigation 객체 가져오기
 
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
        
        <View style={styles.mainContainer}>
          <View style={styles.menuBox}>

            <TouchableOpacity style={styles.noneLineBox}>
              <Text style={styles.menuFont}>이름</Text>
              <Text style={styles.InfoFont}>안정빈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noneLineBox}>
              <Text style={styles.menuFont}>아이디</Text>
              <Text style={styles.InfoFont}>knu2022</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noneLineBox}>
            <Text style={styles.menuFont}>이메일</Text>
              <Text style={styles.InfoFont}>knu2022@kangnam.ac.kr</Text>
            </TouchableOpacity>

          </View>
        </View>
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
  mainContainer: {
    width: "100%",
    height: "83%",
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
    paddingVertical:10,
  },
  menuFont: {
    fontSize: 15,
    fontWeight:"500",
  },
  InfoFont:{
    fontSize: 15,
    fontWeight:"300",
    justifyContent: "flex-end",
  },
  noneLineBox: {
    flexDirection: "row", // 이미지와 텍스트를 가로로 배치
    marginHorizontal: 13,
    alignItems: "center", // 이미지와 텍스트를 수직으로 가운데 정렬
    padding: 10, // 패딩 추가로 터치 영역 확대
    justifyContent: "space-between", // 양쪽 끝으로 배치
  },

});
