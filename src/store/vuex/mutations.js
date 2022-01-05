export default {
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
        state.searchValue = value;
    },
    SET_PRODUCTS_TO_STATE: (state, films) => {
        state.films = films;
    },
}