import React from 'react';
import PropTypes from 'prop-types';

const ControlPanel = (props) => (
    <div className="control-panel" disabled = {!props.anyHistory} onClick = {props.onToggleHistory}>
        <button>
            <i className="fa fa-history fa-2x"></i>
        </button>

    </div>
)

ControlPanel.defaultProps = {
    anyHistory: false
}

ControlPanel.propTypes = {
    anyHistory: PropTypes.bool,
    onToggleHistory: PropTypes.func
}
 export default ControlPanel;