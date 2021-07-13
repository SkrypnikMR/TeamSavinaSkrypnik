import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StLogo } from './styled';
import Button from 'src/components/UI/Button';

const Logo = ({ history, setValue }) => {
    const goToGames = () => {
        const { pathname } = history.location;
        setValue({ name: 'init', value: true });
        history.push('/mainPage');
    };
    const goToStats = () => {
        const { pathname } = history.location;
        setValue({ name: 'init', value: true });
        history.push('/statistics');
    };
    const { t } = useTranslation();
    return (
        <StLogo >
            <img src="../../../public/assets/images/game-development.png" onClick={goToGames}/>
            <div>
                <Button content="GameZone"
                        fontSize='20px'
                        borderRadius="0px"
                        bgColor="transparent"
                        onClick={goToGames}></Button>
                <Button content="Statistics"
                        fontSize='20px'
                        borderRadius="0px"
                        bgColor="transparent"
                        onClick={goToStats}></Button>
            </div>
        </StLogo>
    );
};

Logo.propTypes = {
    history: PropTypes.object,
    setValue: PropTypes.func,
};

export default Logo;
