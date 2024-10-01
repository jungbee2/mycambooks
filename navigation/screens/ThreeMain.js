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
import { useState } from "react"; // useState 훅 import

export default function ThreeMain() {
  const navigation = useNavigation(); // useNavigation 훅으로 navigation 객체 가져오기
  const [activeTab, setActiveTab] = useState(0); // 현재 활성 탭 상태 관리

  const tabs = [
    { id: 0, title: "전체" },
    { id: 1, title: "판매" },
    { id: 2, title: "구매" },
  ];

  // 샘플 데이터
  //     { id: 4, name: "초코", message: "넹", time: "3일전", type: "판매", profileImage: require("../../assets/icon/mypage/user4.png") },
  const chatData = [
    { id: 1, name: "연심이", message: "문의드리려고 연락드렸습니다.", time: "오후 1:17", type: "구매" },
    { id: 2, name: "서누", message: "전공책 맞을까요?", time: "오전 11:56", type: "판매" },
    { id: 3, name: "정코미", message: "내일 연락드릴게요!", time: "어제", type: "구매" },
    { id: 4, name: "초코", message: "넹", time: "3일전", type: "판매" },
  ];

  // 채팅 아이템 렌더링 함수
  const renderChatItem = (item) => (
    <TouchableOpacity
      style={styles.rowContainer} 
      key={item.id}
      onPress={() => navigation.navigate("ChatPage", { chat: item })} // 채팅 항목 클릭 시 ChatPage로 이동
    >
      <Image
        source={require("../../assets/icon/mypage/userlogin.png")} // 프로필 사진  source={item.profileImage} // 각 사용자의 프로필 이미지 하려면 변경하면됨.
        style={styles.myImg}
      />
      <View style={styles.textContainer}>
        <View style={styles.nameTimeContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  // 현재 활성화된 탭에 따라 표시할 채팅 데이터 필터링
  const filteredChatData = chatData.filter((chat) => {
    if (activeTab === 0) return true; // 전체 탭
    if (activeTab === 1 && chat.type === "판매") return true; // 판매 탭
    if (activeTab === 2 && chat.type === "구매") return true; // 구매 탭
    return false;
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topFont}>채팅</Text>
          <TouchableOpacity
            style={styles.setButton}
            onPress={() => navigation.navigate("MySetting")}
          >
            <Image
              source={require("../../assets/icon/chat/alarm.png")}
              style={styles.setImg}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tabButton, activeTab === tab.id ? styles.activeTab : styles.inactiveTab]}
              onPress={() => setActiveTab(tab.id)} // 탭 클릭 시 활성화 상태 변경
            >
              <Text style={[styles.tabText, activeTab === tab.id ? styles.activeText : styles.inactiveText]}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.mainContainer}>
          {filteredChatData.map(renderChatItem)}
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
    justifyContent: "space-between", // 왼쪽과 오른쪽 끝에 배치
    alignItems: "center", // 세로 정렬을 중앙으로
  },
  topFont: {
    fontSize: 20,
    marginTop: 5,
    textAlign: "left", // 왼쪽 정렬
    fontWeight: "700",
    marginLeft: 20, // 좌측 여백 추가 (옵션)
  },
  tabContainer: {
    width: "100%",
    height: "8%",
    flexDirection: "row", // 탭 버튼을 가로로 배치
    justifyContent: "center", // 버튼들을 가운데 정렬
    alignItems: "center",
  },
  tabButton: {
    width: 65, // 버튼 너비를 조정하여 작게 설정
    height: 30, // 버튼 높이를 조정하여 작게 설정
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#67574D",
    borderRadius: 20, // 둥근 모서리
    marginHorizontal: 5, // 버튼 간의 여백 추가
  },
  activeTab: {
    backgroundColor: "#67574D", // 눌린 탭의 배경색
  },
  inactiveTab: {
    backgroundColor: "#ffffff", // 눌리지 않은 탭의 배경색
  },
  tabText: {
    fontWeight: "500", // 텍스트 두께 설정
  },
  activeText: {
    color: "#ffffff", // 눌린 탭의 텍스트 색상
  },
  inactiveText: {
    color: "#000000", // 눌리지 않은 탭의 텍스트 색상
  },
  mainContainer: {
    width: "100%",
    height: "77%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  chatItem: {
    width: "90%", // 채팅 아이템의 너비
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc", // 채팅 아이템 간 구분선 색상
  },
  chatName: {
    fontWeight: "bold", // 사용자 이름 강조
  },
  chatMessage: {
    color: "#555555", // 메시지 색상
  },
  chatTime: {
    color: "#999999", // 시간 색상
    fontSize: 12, // 시간 텍스트 크기
  },
  setButton: {
    paddingRight: 20, // 오른쪽 여백 추가
  },
  setImg: {
    height: 26,
    width: 26,
  },
  rowContainer: {
    flexDirection: 'row', // Horizontal alignment
    alignItems: 'center', // Center vertically
    marginVertical: 8,
  },
  myImg: {
    width: 50, // 이미지의 너비 조정
    height: 50, // 이미지의 높이 조정
    marginRight: 10, // 이미지와 텍스트 사이의 간격
  },
  textContainer: {
    flex: 1, // Text container가 남은 공간을 차지하도록 설정
  },
  nameTimeContainer: {
    flexDirection: 'row', // 이름과 시간을 같은 줄에 위치시키기
    justifyContent: 'space-between', // 간격을 고르게 분배
  },
  nameText: {
    fontWeight: 'bold', // 이름 텍스트 스타일
  },
  timeText: {
    color: 'gray', // 시간 텍스트 색상
  },
});
