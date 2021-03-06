import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

function IonIcon({ name, color }) {
  return (
    <Icon.Ionicons
      name={name}
      color={color}
      size={26}
      style={{ padding: 3 }}
    />
  );
}

IonIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default IonIcon;
