import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const View = styled.View``;
const Text = styled.Text``;
const Touch = styled.TouchableOpacity``;

const TVPresenter = ({ loading }) => {
  return loading ? <Loader /> : <Text>Movies</Text>;
};

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
