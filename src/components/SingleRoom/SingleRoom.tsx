import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';
import { StSingleRoom } from './styled';
import { TSingleRoom, TDistResult } from './types';

const SingleRoom = ({ creatorLogin, gameType, userLogin, id, joinRoom, playWithBot } : TSingleRoom) => {
    const { t } = useTranslation();
    const roomOwner: string = creatorLogin === userLogin ? t('your_room') : creatorLogin;
    const onClickDistributor = (creatorLogin: string, userLogin: string) : TDistResult => {
        return creatorLogin === userLogin
            ? {
                content: 'play_with_bot',
                onClickFunc: e => playWithBot(e.target.id),
            }
            : {
                content: 'join',
                onClickFunc: e => joinRoom(e.target.id),
            };
    };
    const { content, onClickFunc } = onClickDistributor(creatorLogin, userLogin);


    return (
        <StSingleRoom>
            <p>{roomOwner}</p>
            <p>{t(gameType)}</p>
            <Button content={content} width="150px" onClick={onClickFunc} id={id}/>
        </StSingleRoom>
    );
};

export default SingleRoom;
