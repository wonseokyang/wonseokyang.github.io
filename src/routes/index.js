import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
// dashboard
// const EcommerceDashboard = React.lazy(() => import('../pages/dashboards/Ecommerce'));
// report
const ReportProducts = React.lazy(() => import('../pages/report/Products'));
const ReportOrders = React.lazy(() => import('../pages/report/Orders'));
const ReportOrdersReturn = React.lazy(() => import('../pages/report/OrdersReturn'));

// uikit
const Cards = React.lazy(() => import('../pages/uikit/Cards'));
const Buttons = React.lazy(() => import('../pages/uikit/Buttons'));
const Modals = React.lazy(() => import('../pages/uikit/Modals'));
const Tabs = React.lazy(() => import('../pages/uikit/Tabs'));
const Notifications = React.lazy(() => import('../pages/uikit/Notifications'));
const Grid = React.lazy(() => import('../pages/uikit/Grid'));
const General = React.lazy(() => import('../pages/uikit/General'));
const Typography = React.lazy(() => import('../pages/uikit/Typography'));
const Icons = React.lazy(() => import('../pages/uikit/Icons'));
const Spinners = React.lazy(() => import('../pages/uikit/Spinners'));
const Widgets = React.lazy(() => import('../pages/uikit/Widgets'));
// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editors = React.lazy(() => import('../pages/forms/Editors'));
// charts
const ApexChart = React.lazy(() => import('../pages/charts/Apex'));
const BriteChart = React.lazy(() => import('../pages/charts/Brite'));
const ChartJs = React.lazy(() => import('../pages/charts/ChartJs'));
// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));
// maps
const GoogleMaps = React.lazy(() => import('../pages/GoogleMaps'));

// handle auth and authorization

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            // check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: '/' }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/report/productsExported" />,
    route: PrivateRoute,
};

// dashboards
// const dashboardRoutes = {
//     path: '/dashboard',
//     name: 'Dashboard',
//     icon: 'dripicons-meter',
//     header: 'Navigation',
//     component: EcommerceDashboard,
//     route: PrivateRoute,
// };

//report
const reportRoutes = {
    path: '/report',
    name: 'Report',
    icon: 'mdi mdi-note-multiple-outline',
    children: [
        {
            path: '/report/productsExported',
            name: 'Products Exported',
            component: ReportProducts,
            route: PrivateRoute,
        },
        {
            path: '/report/ordersExported',
            name: 'Orders Exported',
            component: ReportOrders,
            route: PrivateRoute,
        },
        {
            path: '/report/ordersReturned',
            name: 'Orders Returned',
            component: ReportOrdersReturn,
            route: PrivateRoute,
        },
    ],
};

// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

// ui
const uiRoutes = {
    path: '/ui',
    name: 'UI Kit',
    icon: 'dripicons-briefcase',
    children: [
        {
            path: '/ui/buttons',
            name: 'Buttons',
            component: Buttons,
            route: PrivateRoute,
        },
        {
            path: '/ui/cards',
            name: 'Cards',
            component: Cards,
            route: PrivateRoute,
        },
        {
            path: '/ui/general',
            name: 'General',
            component: General,
            route: PrivateRoute,
        },
        {
            path: '/ui/grid',
            name: 'Grid',
            component: Grid,
            route: PrivateRoute,
        },
        {
            path: '/ui/icons',
            name: 'Icons',
            component: Icons,
            route: PrivateRoute,
        },
        {
            path: '/ui/modals',
            name: 'Modals',
            component: Modals,
            route: PrivateRoute,
        },
        {
            path: '/ui/notifications',
            name: 'Notifications',
            component: Notifications,
            route: PrivateRoute,
        },
        {
            path: '/ui/spinners',
            name: 'Spinners',
            component: Spinners,
            route: PrivateRoute,
        },
        {
            path: '/ui/tabs',
            name: 'Tabs',
            component: Tabs,
            route: PrivateRoute,
        },
        {
            path: '/ui/typography',
            name: 'Typography',
            component: Typography,
            route: PrivateRoute,
        },
        {
            path: '/ui/widgets',
            name: 'Widgets',
            component: Widgets,
            route: PrivateRoute,
        },
    ],
};

// forms
const formsRoutes = {
    path: '/forms',
    name: 'Forms',
    icon: 'dripicons-document',
    children: [
        {
            path: '/forms/basic',
            name: 'Basic Elements',
            component: BasicForms,
            route: PrivateRoute,
        },
        {
            path: '/forms/advanced',
            name: 'Form Advanced',
            component: FormAdvanced,
            route: PrivateRoute,
        },
        {
            path: '/forms/validation',
            name: 'Form validation',
            component: FormValidation,
            route: PrivateRoute,
        },
        {
            path: '/forms/wizard',
            name: 'Form Wizard',
            component: FormWizard,
            route: PrivateRoute,
        },
        {
            path: '/forms/upload',
            name: 'File Upload',
            component: FileUpload,
            route: PrivateRoute,
        },
        {
            path: '/forms/editors',
            name: 'Editors',
            component: Editors,
            route: PrivateRoute,
        },
    ],
};

// other features
const featuresRoutes = {
    path: '/features',
    name: 'Features',
    icon: 'dripicons-view-list-large',
    children: [
        {
            path: '/features/charts',
            name: 'Charts',
            children: [
                {
                    path: '/features/charts/apex',
                    name: 'Apex',
                    component: ApexChart,
                    route: PrivateRoute,
                },
                {
                    path: '/features/charts/brite',
                    name: 'Brite',
                    component: BriteChart,
                    route: PrivateRoute,
                },
                {
                    path: '/features/charts/chartjs',
                    name: 'Chartjs',
                    component: ChartJs,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/features/tables',
            name: 'Tables',
            children: [
                {
                    path: '/features/tables/basic',
                    name: 'Basic',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '/features/tables/advanced',
                    name: 'Advanced',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/features/googlemaps',
            name: 'Google Maps',
            component: GoogleMaps,
            route: PrivateRoute,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [
    rootRoute,
    reportRoutes,
    authRoutes,
    uiRoutes,
    formsRoutes,
    featuresRoutes,
];

const authProtectedRoutes = [
    reportRoutes,
    uiRoutes,
    formsRoutes, 
    featuresRoutes
];

const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, authProtectedRoutes, allFlattenRoutes };
