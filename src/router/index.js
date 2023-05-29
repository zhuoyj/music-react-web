import React from 'react';
import { Navigate } from "react-router-dom";

const ZYDiscover = React.lazy(() => import("@/pages/discover"));
const ZYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const ZYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const ZYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const ZYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const ZYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const ZYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
// const ZYPlayer = React.lazy(_ => import("../pages/player"));

const ZYFriend = React.lazy(_ => import("../pages/friend"));
const ZYMine = React.lazy(_ => import("../pages/mine"));

const routes = [
  {
    path: '/',
    // exact: true,
    element: <Navigate  to="/discover" />
  },
  {
    path: '/discover',
    element: <ZYDiscover />,
    children: [
      {
        path: "/discover",
        // exact: true,
        element: <Navigate  to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        element: <ZYRecommend />
      },
      {
        path: "/discover/ranking",
        element: <ZYRanking/>
      },
      {
        path: "/discover/songs",
        element: <ZYSongs/>
      },
      {
        path: "/discover/djradio",
        exact: true,
        element: <ZYDjradio/>
      },
      {
        path: "/discover/artist",
        element: <ZYArtist/>
      },
      {
        path: "/discover/album",
        element: <ZYAlbum/>
      },
      // {
      //   path: "/discover/player",
      //   element: <ZYPlayer/>
      // }
    ]
  },
  {
    path: '/mine',
    element: <ZYMine/>
  },
  {
    path: '/friend',
    element: <ZYFriend/>
  }
];

export default routes;