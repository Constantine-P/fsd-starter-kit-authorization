import buildRouteTree from 'build-route-tree';

export const routes = buildRouteTree({
  authorization: {
    resetPassword: null,
    signIn: null,
    signUp: null,
  },
});
