import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import MovieSlider from "../../components/MovieSlider";
import styles from "../../styles";
import Section from "../../components/Section";

const Container = styled.ScrollView`
  background-color: ${styles.BG_COLOR};
`;
const Text = styled.Text``;
const Touch = styled.TouchableOpacity``;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
      {upcoming ? <Section movies={upcoming} title="Upcoming Movies" /> : null}
    </Container>
  );

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array
};

export default MoviesPresenter;
