import React from "react";
import styled from "styled-components";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

const View = styled.View``;
const Text = styled.Text``;
const Touch = styled.TouchableOpacity``;

export default class extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null,
    error: null
  };
  async componentDidMount() {
    try {
      const upcoming = await movies.getUpcoming();
      const popular = await movies.getPopular();
      const nowPlaying = await movies.getNowPlaying();
      console.log(upcoming, popular, nowPlaying);
    } catch {
      this.setState({ error: "Can't get Movies." });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
