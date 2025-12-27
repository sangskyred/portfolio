import React from 'react';

import { checkDevice } from '../../lib/device';
import HomeDesktop from '../../components/home/HomeDesktop';
import HomeMobile from '../../components/home/HomeMobile';

export default async function Page() {
  const { device } = await checkDevice();
  return (
    <div className='data-overlay-container'>
      {device == 'ui-mobile' ? <HomeMobile /> : <HomeDesktop />}
    </div>
  );
}