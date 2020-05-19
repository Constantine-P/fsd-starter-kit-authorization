import { routes as authorizationRoutes } from './Authorization/routes';
import { routes as profileRoutes } from './Profile/routes';

export const routes = {
  ...authorizationRoutes,
  ...profileRoutes,
};
