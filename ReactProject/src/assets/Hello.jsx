/* eslint-disable react/prop-types */

import PropTypes from 'prop-types' 

export default function Hello(props) {
  return (
    <div>
      <h1> {props.name} {props.surname}</h1>
    </div>
  )
}

Hello.PropTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
};

Hello.defaultProps = {
  name: "No email provided",
  surname: "No phone provided"
}