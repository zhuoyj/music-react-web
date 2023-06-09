import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList
} from '@/services/recommend';

const changeTopBannerAction = (res) => (
  {
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
  }
)

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
      // console.log(res);
    })
  }
}

export const getNewAlbumAction = () => {
  // return dispatch => {
  //   getNewAlbums(limit).then(res => {
  //     // console.log(res);
  //     dispatch(changeNewAlbumAction(res))
  //   })
  // }
  return dispatch => {
    getNewAlbum(10, 0).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      // console.log(res)
      switch (idx) {
        case 19723756:
          dispatch(changeNewRankingAction(res));
          break;
        case 3779629:
          dispatch(changeOriginRankingAction(res));
          break;
        case 2884035:
          dispatch(changeUpRankingAction(res));
          break;
        default:
          console.log("其他数据处理");
      }
    })
  }
}