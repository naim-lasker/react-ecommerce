import React from 'react'
import PropTypes from 'prop-types'
import Page from './Page'


const RouteWithLayout = ({ layout: Layout, component: Component, ...rest }) => {

    return (
        <Page
            {...rest}
            render={matchProps =>
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            }
        />
    )
}

RouteWithLayout.propTypes = {
    layout: PropTypes.any.isRequired,
    component: PropTypes.any.isRequired,
}


export default RouteWithLayout
