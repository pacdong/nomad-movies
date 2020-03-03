import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const View = styled.View``;
const Text = styled.Text``;
const Touch = styled.TouchableOpacity``;

const MoviesPresenter = ({ loading }) =>
  loading ? <Loader /> : <Text>Movies</Text>;

MoviesPresenter.PropTypes = {
  loading: PropTypes.bool.isRequired
};

export default MoviesPresenter;
