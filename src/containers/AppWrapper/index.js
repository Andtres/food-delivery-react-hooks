/* Dependencies */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const AppWrapper = ({ children }) => <Fragment>{children}</Fragment>

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppWrapper
