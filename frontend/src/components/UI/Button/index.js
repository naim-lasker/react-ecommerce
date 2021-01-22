import React from 'react'
import PropTypes from 'prop-types'


export const PrimaryButton = ({ text, leftIcon, leftIconClass, rightIcon }) => {
    return (
        <button className="btn-primary">
            {
                leftIcon && <span className={`mr-4 ${leftIconClass}`}>{leftIcon && leftIcon}</span>
            }
            {text && <span>{text}</span>}
            {rightIcon && <span>{rightIcon}</span>}
        </button>
    )
}


PrimaryButton.propTypes = {
    text: PropTypes.any,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any,
}

