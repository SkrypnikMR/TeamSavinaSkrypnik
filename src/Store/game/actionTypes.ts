export enum actionTypes{
    GET_SOCKJS_CONNECTION = '@@game/GET_SOCKJS_CONNECTION',
    PUT_ROOMS = '@@game/PUT_ROOMS',
    SET_USER_LOGIN = '@@game/SET_USER_LOGIN',
    SUBSCRIBE_ROOM = '@@game/SUBSCRIBE_ROOM',
    JOIN_ROOM = '@@game/JOIN_ROOM',
    PLAY_WITH_BOT = '@@game/PLAY_WITH_BOT',
    CREATE_ROOM = '@@game/CREATE_ROOM',
    SET_ACTUAL_ROOM = '@@game/SET_ACTUAL_ROOM',
    DELETE_ROOM = '@@game/DELETE_ROOM',
    GET_STEP_ORDER = '@@game/GET_STEP_ORDER',
    SET_STEP_ORDER = '@@game/SET_STEP_ORDER',
    DO_TIC_STEP = '@@game/DO_TIC_STEP',
    SET_STEP_HISTORY = '@@game/SET_STEP_HISTORY',
    SET_WINNER = '@@game/SET_WINNER',
    CLEAN_OLD_GAME = '@@game/CLEAN_OLD_GAME',
    ASK_BOT_STEP = '@@game/ASK_BOT_STEP',
    DO_BOT_STEP_TIC = '@@game/DO_BOT_STEP_TIC',
    GAME_EVENT = '@@game/GAME_EVENT',
    DISCONNECT = '@@game/DISCONNECT',
    GET_POSIBLE_STEP = '@@game/GET_POSIBLE_STEP',
    PUT_POSSIBLE_STEPS = '@@game/PUT_POSSIBLE_STEPS',
    DO_CHECKER_STEP = '@@game/DO_CHECKER_STEP',
    EXIT_GAME = '@@game/EXIT_GAME',
}
