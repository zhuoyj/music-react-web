import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/contants'

import ZYThemeHeaderRCM from '@/components/theme-header-rcm'
import ZYSongsCover from '@/components/songs-cover';

import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/actionCreators'

export default memo(function ZYHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch();
  console.log(hotRecommends);

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  },[dispatch])
  return (
    <HotRecommendWrapper>
      <ZYThemeHeaderRCM title="热门推荐" keywords={["话语", "流行", "民谣", "摇滚", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <ZYSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})