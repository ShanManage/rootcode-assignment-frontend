// Routes
// This folder contains the routing configuration and components that manage the application's navigation structure. 

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { APP_ROUTES } from '../constant'
import {
  HomeScreen,
} from '../pages'
import AppLayout from '../components/appLayout/AppLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={APP_ROUTES.ROOT} element={<AppLayout />}>
        <Route path={APP_ROUTES.ROOT} element={<HomeScreen />} />
      </Route>
    </Route>
  )
)

const AppRoutes = () => {
  return <RouterProvider router={router} />
}
export default AppRoutes
