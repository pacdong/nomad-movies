import React from "react";
import TVPresenter from "./TVPresenter";
import { moviesApi } from "../../api";

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
      const upcoming = await moviesApi.getUpcoming();
      const popular = await moviesApi.getpopular();
      const nowPlaying = await moviesApi.getnowPlaying();
      console.log(upcoming, popular, nowPlaying);
    } catch {
      this.setState({ error: "Can't get Movies." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    return <TVPresenter loading={loading} />;
  }
}
