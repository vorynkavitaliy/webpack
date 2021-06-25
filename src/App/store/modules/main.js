import {
    SET_LOADING,
    SET_ERROR,
    SET_SUCCESS,
    CLEAR_ERROR,
    CLEAR_LOADING,
    CLEAR_SUCCESS,
} from '../types/main'

export default {
    state: {
        loading: false,
        error: null,
        success: null,
    },

    mutations: {
        [SET_LOADING]: (state) => (state.loading = true),
        [SET_ERROR]: (state, payload) => (state.error = payload),
        [SET_SUCCESS]: (state, payload) => (state.success = payload),
        [CLEAR_LOADING]: (state) => (state.loading = false),
        [CLEAR_ERROR]: (state) => (state.error = null),
        [CLEAR_SUCCESS]: (state) => (state.success = null),
    },

    getters: {
        loading: (state) => state.loading,
        error: (state) => state.error,
        success: (state) => state.success,
    },
}
