export const regInputs = [{
    id: 'login',
    label: 'login_label',
    placeholder: 'login_placeholder',
},
{
    id: 'password',
    label: 'password_label',
    placeholder: 'password_placeholder',
},
{
    id: 'confirm',
    label: 'confirm_label',
    placeholder: 'confirm_placeholder',
}];
export const logInputs = [{
    id: 'login',
    label: 'login_label',
    placeholder: 'login_placeholder',
},
{
    id: 'password',
    label: 'password_label',
    placeholder: 'password_placeholder',
}];
export const HEADER_CONTROL_BTNS = [
    {
        id: 'theme_btn',
        value: 'dark',
        content: '💡',
    },
    {
        id: 'en',
        content: 'english_translate_btn',
        value: 'en',
    },
    {
        id: 'ru',
        content: 'russian_translate_btn',
        value: 'ru',
    }];
export const INPUT__MESSAGE = [{
    id: 'message',
    placeholder: 'placeholder_control_input',
}];
export const INPUT_PLACEHOLDER_SEARCH = [
    {
        id: 'search',
        placeholder: 'placeholder_shearch_input',
    },
];
export const MODAL_USERS_BUTTON = [{
    id: 'closeModal',
    content: 'modal_users_cancel',
    value: '',
},
{
    id: 'sendMessage',
    content: 'modal_users_confirm',
    value: '',
}];
export const GAME_TYPE = {
    tic_tac_toe: 'Tic-tac-toe',
    checkers: 'Checkers',
};

export const INITIAL_STATE_FOR_CHECKER = Array.from({ length: 64 }, (_, i) => {
    let color = null;
    let isChecked = null;
    if (i >= 41 && i <= 64) {
        color = "black";
        if (parseInt((i / 8) + i) % 2 === 0) {
            isChecked = true;
        }
    } else if (i >= 0 && i <= 23) {
        color = "white";
        if (parseInt((i / 8) + i) % 2 === 0) {
            isChecked = true;
        }
    }
    return { position: 63 - i, isChecked, color };
});
