import request from './request';

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// export function getNewAlbums(limit) {
//   return request({
//     // url: "/top/album",
//     url: "/personalized",
//     params: {
//       limit,
//     }
//   })
// }
export function getNewAlbum(limit, offset) {
  return request({
    url: "/album/new",
    params: {
      limit,
      offset
    }
  })
}
// export function getTopList(idx) {
//   return request({
//     url: "/top/list",
//     params: {
//       idx
//     }
//   })
// }

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
