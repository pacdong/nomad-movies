import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const View = styled.View``;
const Text = styled.Text``;
const Touch = styled.TouchableOpacity``;

const TVPresenter = ({ loading, popular, topRated, airingToday }) => {
  return loading ? <Loader /> : <Text>Movies</Text>;
};

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
