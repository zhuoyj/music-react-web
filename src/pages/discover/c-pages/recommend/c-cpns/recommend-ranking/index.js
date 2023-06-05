import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import ZYThemeHeaderRCM from '@/components/theme-header-rcm';
import ZYTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators';

const ZYRecommendRanking = memo(() => {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
    // console.log(11111)
  }, [dispatch]);
  // console.log(upRanking)

  return (
    <RankingWrapper>
      <ZYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <ZYTopRanking info={upRanking}/>
        <ZYTopRanking info={newRanking}/>
        <ZYTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})

export default ZYRecommendRanking