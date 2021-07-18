type Regular = {
    loginRegExp: RegExp;
    passwordRegExp: RegExp;
}

export const regExp : Regular = {
    loginRegExp: /^[a-z0-9A-Z]{1,25}/i,
    passwordRegExp: /^[a-z0-9A-Z]{6,25}/i,
};
