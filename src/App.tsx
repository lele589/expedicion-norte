import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './pages/components/Navbar/Navbar';

const HomeView = React.lazy(() => import('./pages/Home/View'))
const DetailPostView = React.lazy(() => import('./pages/Posts/detail/View'))
const NewPostView = React.lazy(() => import('./pages/Posts/new_post/View'))
const CategoryView = React.lazy(() => import('./pages/Posts/category/View'))

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
          </Switch>
  </BrowserRouter>
  );
}

export default App;
