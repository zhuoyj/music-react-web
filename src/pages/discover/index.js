import React, { memo , Suspense, useEffect} from 'react';
// import { useRoutes } from 'react-router-dom'

import { dicoverMenu } from "@/common/local-data";
import axios from '@/services/request';

import { Link ,Outlet} from 'react-router-dom';
import {
  DiscoverWrapper,
  TopMenu
} from './style';

const ZYDiscover = memo((props) => {
  useEffect(() => {
    axios({
      url: "/banner"
    }).then(res => {
      // console.log(res);
    })
  },[])

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <Link to={item.link}>{item.title}</Link>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {/* {useRoutes(route.routes)} */}
      <Suspense>
        <Outlet />
        </Suspense>
    </DiscoverWrapper>
  )
})

export default ZYDiscover