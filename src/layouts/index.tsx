import type { ReactNode } from 'react';
import type { RunTimeLayoutConfig } from 'umi';

export const layout: RunTimeLayoutConfig = ({ initialState }: any) => {
  return {
    headerContentRender: () => (<div>456</div>),
    rightContentRender: () => (<div>123</div>),
    childrenRender: (
      children: ReactNode[],
      props: { location: { pathname: string | string[] } },
    ) => {
      return (
        <>
          {children}
          {/*{!props.location?.pathname?.includes('/login') && <SettingDrawer />}*/}
        </>
      );
    },
    ...initialState?.settings,
  };
};
