import React, { memo,Suspense } from 'react'
// import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';

import routes from './router'
import store from './store';

import ZYAppHeader from '@/components/app-header'
import ZYAppFooter from '@/components/app-footer'
import { useRoutes } from 'react-router-dom'

const App = memo(() => {
  return (
    <div>
      <Provider store={store}>
      <ZYAppHeader />
      <Suspense>
        {useRoutes(routes)}
        </Suspense>
        <ZYAppFooter />
        </Provider>
      </div>
  )
})

export default App