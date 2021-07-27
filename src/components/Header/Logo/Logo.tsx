import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/UI/Button';
import { StLogo } from './styled';
import { LOGO } from '../../UI/baseLayout';

const Logo = ({ history }) => {
    const goToGames = () => history.push('/mainPage');
    const goToStats = () => history.push('/statistics');
    const { t } = useTranslation();
    return (
        <StLogo >
            <img src={LOGO} onClick={goToGames} />
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
