/* eslint-disable react/prop-types */

import PropTypes from 'prop-types' 

export default function Contact(props) {
    return (
        <div>
            <h2> {props.email} {props.phone} </h2>
        </div>
    );
}

Contact.PropTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

Contact.defaultProps = {
    email: "No email provided",
    phone: "No phone provided"
}
  