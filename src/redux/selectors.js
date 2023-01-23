export const selectUser = state => state.userData.user;
export const selectIsLogged = state => state.userData.isLoggedIn;
export const selectIsLoading= state => state.userData.isLoading
export const selectToken = state => state.userData.token;
export const selectIsError = state => state.userData.isError;
// { return { user: state.user, token: state.token } };