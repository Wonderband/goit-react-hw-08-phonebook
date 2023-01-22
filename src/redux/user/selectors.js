export const selectUser = state => state.userData;
export const selectIsLogged = state => state.userData.isLoggedIn;
export const selectToken = state => state.userData.token;
// { return { user: state.user, token: state.token } };