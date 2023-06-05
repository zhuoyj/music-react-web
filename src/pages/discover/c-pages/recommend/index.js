import React, { memo } from 'react';

import ZYTopBanner from './c-cpns/top-banner';
import ZYHotRecommend from './c-cpns/hot-recommend';
import ZYRecommendRanking from './c-cpns/recommend-ranking';
import ZYNewAlbum from './c-cpns/new-album';
import ZYUserLogin from './c-cpns/user-login';
import ZYSettleSinger from './c-cpns/settle-singer';
import ZYHotAnchor from './c-cpns/hot-anchor';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

function ZYRecommend(props) {
  
  return (
    <RecommendWrapper>
      <ZYTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <ZYHotRecommend />
          <ZYNewAlbum/>
          <ZYRecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <ZYUserLogin />
          <ZYSettleSinger />
          <ZYHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
 }


 export default memo(ZYRecommend);


// function ZYRecommend(props) {
//   const { getBanners, topBanners} = props;

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       <h2>ZYRecommend:{ topBanners.length}</h2>
//     </div>
//   )
//  }

// const mapStateToProps = state => ({
//    topBanners: state.recommend.topBanners
// })
 
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

//  export default connect(mapStateToProps, mapDispatchToProps)(memo(ZYRecommend));
