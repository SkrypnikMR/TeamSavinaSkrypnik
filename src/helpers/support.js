import moment from 'moment';

export const support = {
    setSessionStorageItem: (name, data) => {
        if (typeof data !== 'string') data = JSON.stringify(data);
        localStorage.setItem(name, data);
    },
    killSessionStorageItem: (name) => {
        localStorage.removeItem(name);
    },
    getSessionStorageItem: (name) => {
        const item = localStorage.getItem(name);
        return item?.charAt(0) === '{' ? JSON.parse(item) : item;
    },
    getMessagesFolders: (rooms) => {
        const messagesFolders = {};
        rooms.forEach((room) => {
            const { room_name } = room;
            messagesFolders[room_name] = [];
        });
        return messagesFolders;
    },
    getFormatedDate: date => moment(date).format('YYYY-MM-DD HH:mm:ss'),
    playAudio: (path) => {
        const audio = new Audio(path);
        audio.play();
    },
};
