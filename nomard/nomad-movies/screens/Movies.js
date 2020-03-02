import React from "react";
import styled from "styled-components";

const View = styled.View``;
const Text = styled.Text``;
const Touch = styled.TouchableOpacity``;

export default ({ navigation }) => {
  return (
    <View>
      <Text>Movies</Text>
      <Touch onPress={() => navigation.navigate("Detail")}>
        <Text>Go to detail</Text>
      </Touch>
    </View>
  );
};
