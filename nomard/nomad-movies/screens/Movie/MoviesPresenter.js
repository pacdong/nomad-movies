import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const View = styled.View``;
const Text = styled.Text``;
const Touch = styled.TouchableOpacity``;

const MoviesPresenter = () => <Text>Movies</Text>;

MoviesPresenter.PropTypes = {
  loading: PropTypes.bool.isRequired
};

export default MoviesPresenter;
