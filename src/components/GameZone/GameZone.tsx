import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Chessplate from '../ChessPlate';
import TicTacToePlate from '../TicTacToePlate';
import { useTheme } from '../Hook/useTheme';
import { StGameZone } from './styled';
import { TGZ } from './types';
import Turn from '../Turn';
import Hello from '../Hello';
import Button from '../UI/Button';
import ModalCustom from '../ModalCustom';
import ModalDelete from '../ModalDelete';

const GameZone = ({ gameType }: TGZ) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen((prev) => !prev);
    const { colors, theme } = useTheme(); 
    switch (gameType) {
        case 'Checkers': return (
            <div>
                <StGameZone colors={colors} theme={theme}>
                    <Turn/>
                    <Button content="???" position="absolute" width="35px" right="3%" onClick={handleClick}/>
                    <Chessplate />
                </StGameZone>
                {isOpen && <ModalCustom header={t('delete_game')} content={<ModalDelete handlecloseModal={handleClick}/>} handlecloseModal={handleClick}/>}
            </div>
        );
        case 'Tic-tac-toe': return (
            <StGameZone colors={colors} theme={theme}>
                <Turn/>
                <TicTacToePlate />
            </StGameZone>
        );
        default: return (
                <Hello/>
        );
    }
};

export default GameZone;
