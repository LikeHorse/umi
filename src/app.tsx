import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import defaultSettings from '../config/defaultLayoutSettings';
export { layout } from '@/layouts';

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: any;
  fetchUserInfo?: () => Promise<any>;
}> {
  return {
    settings: {
      ...defaultSettings,
    },
  };
}
