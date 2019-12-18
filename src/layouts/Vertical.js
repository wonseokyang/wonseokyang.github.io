// @flow
import React, { Component, Suspense } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeSidebarTheme, changeSidebarType } from '../redux/actions';
import * as layoutConstants from '../constants/layout';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const LeftSidebar = React.lazy(() => import('../components/LeftSidebar'));
const Footer = React.lazy(() => import('../components/Footer'));

type VerticalLayoutProps = {
    changeLayout: PropTypes.func,
    changeSidebarTheme: PropTypes.func,
    changeSidebarType: PropTypes.func,
    children?: any,
    layout: {
        leftSideBarType?: string,
        leftSideBarTheme?: string,
    },
};

type VerticalLayoutState = {
    isMenuOpened?: boolean,
};

// loading
const emptyLoading = () => <div></div>;
const loading = () => <div className="text-center"></div>;

class VerticalLayout extends Component<VerticalLayoutProps, VerticalLayoutState> {
    constructor(props) {
        super(props);
        this.openLeftMenu = this.openLeftMenu.bind(this);
    }

    /**
     * Opens the left menu - mobile
     */
    openLeftMenu = () => {
        if (document.body) document.body.classList.add('sidebar-enable');
    };

    componentDidMount = () => {
        this.props.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK);

        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth <= 1028) {
            this.props.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED);
        }
    };

    render() {
        // get the child view which we would like to render
        const children = this.props.children || null;

        const isCondensed = this.props.layout.leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
        const isLight = this.props.layout.leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;

        return (
            <div className="app">
                <div className="wrapper">
                    <Suspense fallback={emptyLoading()}>
                        <LeftSidebar
                            isCondensed={isCondensed}
                            isLight={isLight}
                            hideUserProfile={true}
                            {...this.props}
                        />
                    </Suspense>

                    <div className="content-page">
                        <div className="content">
                            <Container fluid>
                                <Suspense fallback={loading()}>{children}</Suspense>
                            </Container>
                        </div>

                        <Suspense fallback={emptyLoading()}>
                            <Footer {...this.props} />
                        </Suspense>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.Layout,
    };
};
export default connect(
    mapStateToProps,
    { changeSidebarTheme, changeSidebarType }
)(VerticalLayout);
