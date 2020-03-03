import React from "react";
import styled from "styled-components";
import MoviesPresenter from "./MoviesPresenter";

const View = styled.View``;
const Text = styled.Text``;
const Touch = styled.TouchableOpacity``;

export default class extends React.Component {
  state = {
    loading: true
  };
  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
