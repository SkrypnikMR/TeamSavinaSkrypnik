import { useContext } from 'react';

import { colors } from '../UI/baseLayout';
import { Theme } from '../HOC';

export const useTheme = () => ({
  colors,
  ...useContext(Theme),
});
