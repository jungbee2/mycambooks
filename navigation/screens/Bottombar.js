// Bottombar.js
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Bottombar() {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OneMain")}
      >
        <Image
          source={require("../../assets/icon/book.png")}
          style={styles.iconImg}
        />
        <Text style={styles.buttonText}>중고거래</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TwoMain")}
      >
        <Image
          source={require("../../assets/icon/note.png")}
          style={styles.iconImg}
        />
        <Text style={styles.buttonText}>커뮤니티</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ThreeMain")}
      >
        <Image
          source={require("../../assets/icon/chat.png")}
          style={styles.iconImg}
        />
        <Text style={styles.buttonText}>채팅</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FourMain")}
      >
        <Image
          source={require("../../assets/icon/heart.png")}
          style={styles.iconImg}
        />
        <Text style={styles.buttonText}>스크랩</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FiveMain")}
      >
        <Image
          source={require("../../assets/icon/user.png")}
          style={styles.iconImg}
        />
        <Text style={styles.buttonText}>마이페이지</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 76,
    backgroundColor: "#fff",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingHorizontal: 8,
    shadowColor: "#000", // 그림자 추가
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  iconImg: {
    width: 24, // 아이콘 크기 조정
    height: 24, // 아이콘 크기 조정
  },
  button: {
    alignItems: "center",
    justifyContent: "center", // 텍스트와 아이콘 정렬을 중앙으로 설정
  },
  buttonText: {
    fontSize: 12, // 텍스트 크기 조정
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
});
