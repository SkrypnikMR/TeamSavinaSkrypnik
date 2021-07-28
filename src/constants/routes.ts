export const routes = {
    baseUrl: 'http://35.176.167.155:8089/',
    account: {
        registration: 'registration/reg',
        login: 'authorization/auth',
    },
    statistic: {
        byUserName: 'statistic/search-by-username',
    },
    baseWebSocketUrl: 'ws://35.176.167.155:8082/',
    ws: {
        game_menu: 'game-menu',
        subs: {
            rooms: '/topic/rooms',
            user_errors: '/user/topic/errors',
            user_game: '/user/topic/game/',
            newGame: '/topic/game/',
            botStep: '/topic/bot/',
        },
        actions: {
            getRooms: '/radioactive/update-room',
            createRoom: '/radioactive/create-room',
            joinRoom: '/radioactive/join-room',
            deleteRoom: '/radioactive/delete-room',
            getStepOrder: '/radioactive/get-step-order',
            doStep: '/radioactive/do-step',
            getBotStep: '/radioactive/get-bot-step',
            getPossibleStep: '/radioactive/get-possible-steps',
            leaveTheGame: '/radioactive/leave-the-game',
        },
    },

};
