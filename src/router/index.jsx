import { Navigate } from 'react-router-dom'
import React from 'react'
// 路由懒加载
const Home = React.lazy(() => import('@/pages/home'))
const CityList = React.lazy(() => import('@/pages/citylist'))
const HomePage = React.lazy(() => import('@/pages/home/c-cpns/homepage'))
const FindPage = React.lazy(() => import('@/pages/home/c-cpns/findpage'))
const InformationPage = React.lazy(() =>
  import('@/pages/home/c-cpns/informationpage')
)
const Maps = React.lazy(() => import('@/pages/maps'))
const MinePage = React.lazy(() => import('@/pages/home/c-cpns/minepage'))
const Login = React.lazy(() => import('@/pages/login'))
const Detail = React.lazy(() =>
  import('@/pages/home/c-cpns/findpage/c-cpns/detail')
)
const Registe = React.lazy(() => import('@/pages/registe'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      { path: '/home', element: <Navigate to="/home/homepage" /> },
      { path: '/home/homepage', element: <HomePage /> },
      { path: '/home/findpage', element: <FindPage /> },
      { path: '/home/informationpage', element: <InformationPage /> },
      { path: '/home/minepage', element: <MinePage /> }
    ]
  },
  {
    path: '/citylist',
    element: <CityList />
  },
  {
    path: '/map',
    element: <Maps />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: `/detail/:id`,
    element: <Detail />
  },
  {
    path: '/registe',
    element: <Registe />
  }
]

export default routes
