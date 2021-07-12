import { createSelector } from 'reselect';

export const getModalState = state => state.modals;
export const getModalVisibilityByType = createSelector(
    getModalState,
    (state, props) => props.modalType,
    (modals, modalType) => modals[modalType],
);
export const getModalDataByType = createSelector(
    getModalVisibilityByType,
    modalsByType => modalsByType?.data,
);
export const getModalVisibilityIsOpen = createSelector(
    getModalVisibilityByType,
    (modalsByType = {}) => modalsByType?.isOpen,
);
