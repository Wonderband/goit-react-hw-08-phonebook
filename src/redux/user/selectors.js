export const selectUser = state => state.userData;
export const selectIsLogged = state => state.userData.isLoggedIn;
// { return { user: state.user, token: state.token } };