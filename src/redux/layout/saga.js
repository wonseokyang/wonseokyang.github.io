// @flow
import { all, call, fork, takeEvery, put } from 'redux-saga/effects';

import {
    CHANGE_LAYOUT,
    CHANGE_LAYOUT_WIDTH,
    CHANGE_SIDEBAR_THEME,
    CHANGE_SIDEBAR_TYPE,
} from './constants';
import * as layoutConstants from '../../constants';
import {
    changeLayoutWidth as changeLayoutWidthAction,
    changeSidebarTheme as changeLeftSidebarThemeAction,
    changeSidebarType as changeSidebarTypeAction,
} from './actions';

/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
    if (document.body) document.body.setAttribute(attribute, value);
    return true;
}

/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * Note: Following are the functions which allows you to save the user prefrences on backend side by making an api request.
 * For now, we are just applying the required logic on frontend side
 * ----------------------------------------------------------------------------------------------------------------------------
 */

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayout({ payload: layout }) {
    try {
        yield call(changeBodyAttribute, 'data-layout', layout);
        if (layout === layoutConstants.LAYOUT_VERTICAL) {
            yield put(changeLeftSidebarThemeAction(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT));
            yield put(changeSidebarTypeAction(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
        }

        if (layout === layoutConstants.LAYOUT_HORIZONTAL) {
            yield put(changeLeftSidebarThemeAction(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT));
            yield put(changeSidebarTypeAction(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
        }

        if (layout === layoutConstants.LAYOUT_DETACHED) {
            yield put(changeLayoutWidthAction(layoutConstants.LAYOUT_WIDTH_FLUID));
            yield put(changeSidebarTypeAction(layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE));
            yield put(changeLeftSidebarThemeAction(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT));
        }
    } catch (error) {}
}

/**
 * Changes the layout width
 * @param {*} param0
 */
function* changeLayoutWidth({ payload: width }) {
    try {
        yield call(changeBodyAttribute, 'data-layout-mode', width);
    } catch (error) {}
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changeLeftSidebarTheme({ payload: theme }) {
    try {
        yield call(changeBodyAttribute, 'data-leftbar-theme', theme);
    } catch (error) {}
}

/**
 * Changes the left sidebar type
 * @param {*} param0
 */
function* changeLeftSidebarType({ payload: type }) {
    try {
        yield call(changeBodyAttribute, 'data-leftbar-compact-mode', type);
    } catch (error) {}
}

/**
 * Watchers
 */
export function* watchChangeLayoutType(): any {
    yield takeEvery(CHANGE_LAYOUT, changeLayout);
}

export function* watchChangeLayoutWidth(): any {
    yield takeEvery(CHANGE_LAYOUT_WIDTH, changeLayoutWidth);
}

export function* watchChangeLeftSidebarTheme(): any {
    yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme);
}

export function* watchChangeLeftSidebarType(): any {
    yield takeEvery(CHANGE_SIDEBAR_TYPE, changeLeftSidebarType);
}


function* LayoutSaga(): any {
    yield all([
        fork(watchChangeLayoutType),
        fork(watchChangeLayoutWidth),
        fork(watchChangeLeftSidebarTheme),
        fork(watchChangeLeftSidebarType),
    ]);
}

export default LayoutSaga;
