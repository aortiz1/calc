import React from 'react';
import PropTypes from 'prop-types';


// todo add styles
const Display = (props) => (
    <div className="mt-md-2" style={{position: 'relative'}}>
        <div>{props.expression}</div>
        <div>{props.value}</div>
    </div>
);

Display.defaultProps = {
    expression: '',
    value: '0'
};

Display.propTypes = {
    expression: PropTypes.string,
    value:PropTypes.string
};

export default Display;