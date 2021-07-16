import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/UI/Button';
import { StLogo } from './styled';

const Logo = ({ history }) => {
    const goToGames = () => {
        const { pathname } = history.location;
        history.push('/mainPage');
    };
    const goToStats = () => {
        const { pathname } = history.location;
        history.push('/statistics');
    };
    const { t } = useTranslation();
    return (
        <StLogo >
            <img src="../../../public/assets/images/game-development.png" onClick={goToGames} />
            <div>
                <Button
                    content={t('game_zone')}
                    fontSize='20px'
                    borderRadius="0px"
                    bgColor="transparent"
                    onClick={goToGames}
                />
                <Button
                    content={t('statistics')}
                    fontSize='20px'
                    borderRadius="0px"
                    bgColor="transparent"
                    onClick={goToStats}
                />
            </div>
        </StLogo>
    );
};


export default Logo;
