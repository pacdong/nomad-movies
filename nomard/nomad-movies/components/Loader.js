import React from "react";
import { ActivityIndicator } from "react-native";
import styles from "../styles";
import styled from "styled-components";

const View = styled.View`
  background-color: black;
  flex: 1;
  justify-content: center;
`;

export default () => {
  return (
    <View>
      <ActivityIndicator color={styles.TINT_COLOR} />
    </View>
  );
};
