import React from "react";
import { Dimensions } from "react-native";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
const Height = Dimensions.get("screen").height;

const KeyboardWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    height: Height * 0.9,
  },
});

export default KeyboardWrapper;
