import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './pages/components/Navbar/View';

const HomeView = React.lazy(() => import('./pages/Home/View'))
const DetailPostView = React.lazy(() => import('./pages/Posts/detail/View'))
const NewPostView = React.lazy(() => import('./pages/Posts/new_post/View'))
const CategoryView = React.lazy(() => import('./pages/Posts/category/View'))
const LoginView = React.lazy(() => import('./pages/Users/login/View'))

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
