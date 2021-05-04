import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

import { RootState } from './store/store'
import Navbar from './pages/components/Navbar/View'
import * as actionTypes from './store/actions'

const HomeView = React.lazy(() => import('./pages/Home/View'))
const DetailPostView = React.lazy(() => import('./pages/Posts/detail/View'))
const NewPostView = React.lazy(() => import('./pages/Posts/new_post/View'))
const CategoryView = React.lazy(() => import('./pages/Posts/category/View'))
const LoginView = React.lazy(() => import('./pages/Users/login/View'))

function App() {

    const dispatch = useDispatch();
    const isUserLogged = useSelector((state: RootState) => state.logged);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch({
                type: actionTypes.USER_LOGGED,
                value: true
            })
        }
    }, [isUserLogged]);

    
  return (
    <BrowserRouter>
    <Navbar isUserLogged={isUserLogged} />
      <Switch>
            <Route path="/" exact>
                <Suspense fallback={<div>Cargando...</div>}>
                  <HomeView />
              </Suspense>
            </Route>

            <Route path="/posts/nuevo">
                <Suspense fallback={<div>Cargando...</div>}>
                  <NewPostView />
              </Suspense>
            </Route>

            <Route path="/posts/detail/:idPost">
                <Suspense fallback={<div>Cargando...</div>}>
                  <DetailPostView />
              </Suspense>
            </Route>

            <Route path="/posts/:categoryName">
                <Suspense fallback={<div>Cargando...</div>}>
                  <CategoryView />
              </Suspense>
            </Route>

          <Route path="/login">
              <Suspense fallback={<div>Cargando...</div>}>
                  <LoginView />
              </Suspense>
          </Route>
          </Switch>
  </BrowserRouter>
  );
}

export default App;
