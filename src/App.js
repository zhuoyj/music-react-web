import React, { memo,Suspense } from 'react'
// import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';

import routes from './router'
import store from './store';

import { useRoutes } from 'react-router-dom'
import ZYAppHeader from '@/components/app-header'
import ZYAppFooter from '@/components/app-footer'
import ZYAppPlayerBar from './pages/player/app-player-bar/index'

const App = memo(() => {
  return (
    <div>
      <Provider store={store}>
        <ZYAppHeader />
          {/* 因为路由使用了懒加载，单击相应界面的时候资源可能还没请求到，所以使用Suspense（悬而未决的）来进行占位 */}
        <Suspense>
        {useRoutes(routes)}
        </Suspense>
        <ZYAppFooter />
        <ZYAppPlayerBar/>
        </Provider>
      </div>
  )
})

export default App