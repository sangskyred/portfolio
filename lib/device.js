import { headers } from 'next/headers';

export async function checkDevice() {
  const headerList = await headers();
  let device
  // 'user-agent' là header tiêu chuẩn của trình duyệt
  const userAgent = headerList.get('user-agent') || '';
  const isMobile = /mobile/i.test(userAgent);
  device = isMobile ? 'ui-mobile' : 'desktop'
  return { device, userAgent }
}