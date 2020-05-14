import buildRouteTree from 'build-route-tree';

export const routes = buildRouteTree({
  authorization: {
    restore: null,
    signIn: null,
    signUp: null,
    account: null,
  },
});
