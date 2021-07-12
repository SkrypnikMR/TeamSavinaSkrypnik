import { createSelector } from 'reselect';

export const userStore = state => state.user;

export const userInit = createSelector(
  userStore,
  ({ init }) => init,
);
export const userToken = createSelector(
  userStore,
  ({ token }) => token,
);
export const userSettings = createSelector(
  userStore,
  ({ settings }) => settings,
);
export const userNotifSettings = createSelector(
  userSettings,
  ({ notifications }) => notifications,
);

export const userTheme = createSelector(
  userStore,
  ({ theme }) => theme,
);
export const userInfo = createSelector(
  userStore,
  ({ userInfo }) => userInfo,
);
export const userEmail = createSelector(
  userInfo,
  ({ email }) => email,
);
export const newMessage = createSelector(
  userStore,
  ({ newMessage }) => newMessage,
);
export const userThemeMode = createSelector(
  userStore,
  ({ themeMode }) => themeMode,
);
export const changeUser = createSelector(
  userStore,
  ({ changeUser }) => changeUser,
);
export const userId = createSelector(
  userInfo,
  ({ id }) => id,
);
