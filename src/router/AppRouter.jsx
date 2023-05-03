import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from '../heroes';
import { LoginPage }  from '../auth';
import { Navbar } from "../ui";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { PublicRoute } from "../heroes/routes/PublicRoute";

export const AppRouter = () => {
  return (
    <>
      {}
      
        <Routes>
            <Route path="login" element={<LoginPage/>}/>

            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }/>
            <Route path='/login'
              element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>}
              
            />

            <Route path="/*" element={<HeroesRoutes/>}/>
        </Routes>
    </>
  )
}
