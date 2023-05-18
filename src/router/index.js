import ZYDiscover from '@/pages/discover';
import ZYMine from '@/pages/mine';
import ZYFriend from '@/pages/friend';


const routes = [
  {
    path: '/',
    element: <ZYDiscover/>
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