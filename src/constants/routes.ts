export const routes = {
    baseUrl: 'http://35.176.167.155:8089/',
    account: {
        registration: 'registration/reg',
        login: 'authorization/auth',
    },
    baseWebSocketUrl: 'ws://35.176.167.155:8082/',
    ws: {
        game_menu: 'game-menu',
        subs: {
            rooms: '/topic/rooms',
            user_errors: '/user/topic/errors',
            user_game: '/user/topic/game',
        },
        actions: {
            getRooms: '/radioactive/update-room',
            createRoom: '/radioactive/create-room',
        },
    },

};
