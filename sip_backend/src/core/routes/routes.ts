// File: /src/core/routes/routes.ts
import HomeRouter from '../../api/home/routes/HomeRoute';
import UserRoute from '../../user/routes/UserRoute'

export const home = { HomeRouter };
export const user = { UserRoute };