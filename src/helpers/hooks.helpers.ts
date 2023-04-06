import { useMediaQuery } from 'react-responsive';

export const useIsMobile = (): boolean =>
  useMediaQuery({ query: '(max-width: 992px)' });
