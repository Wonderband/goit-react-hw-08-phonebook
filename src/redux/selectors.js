export const selectUser = state => state.userData.user;
export const selectIsLogged = state => state.userData.isLoggedIn;
export const selectIsLoading = state => state.userData.isLoading || state.contacts.isLoading;
export const selectToken = state => state.userData.token;
export const selectIsError = state => state.userData.isError;
export const selectFilter = state => state.filter;
