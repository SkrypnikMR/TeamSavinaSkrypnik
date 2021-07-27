import React from 'react';
import { useTranslation } from 'react-i18next';
import { StHello } from './styled';
import { useTheme } from '../Hook/useTheme';
import { THello } from './types';

const Hello = ({ userLogin }: THello) => {
    const { colors, theme } = useTheme();
    const { t } = useTranslation();
    return (
        <StHello colors={colors} theme={theme}>
            <img src="https://i.gifer.com/origin/51/518532f622d962be53e2e1f8989263a8_w200.gif"/>
            <p>
                {t('hi')}
                {' '}
            {userLogin}
            <br/>
                {t('joing_room')}
            </p>
        </StHello>
    );
};

export default Hello;
