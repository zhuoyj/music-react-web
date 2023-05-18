import React, { memo } from 'react'
// import { renderRoutes } from 'react-router-config'

import routes from './router'

import ZYAppHeader from '@/components/app-header'
import ZYAppFooter from '@/components/app-footer'
import { useRoutes } from 'react-router-dom'

const App = memo(() => {
  return (
    <div>
      <ZYAppHeader />
      {useRoutes(routes)}
      <ZYAppFooter />
      </div>
  )
})

export default App