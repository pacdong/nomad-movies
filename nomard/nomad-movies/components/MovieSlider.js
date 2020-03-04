import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";

const SWIPER_HIGHT = Layout.height / 3;
const View = styled.View`
  height: ${SWIPER_HIGHT};
`;

const MovieSlider = ({ movies }) => () => {
  <Swiper>
    <View></View>
  </Swiper>;
};

MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;
