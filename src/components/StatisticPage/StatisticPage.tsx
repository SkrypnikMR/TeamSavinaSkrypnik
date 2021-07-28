import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import StatisticCard from '../StatisticCard';
import { StStatisticPage, StStatisticContent } from './styled';
import { TStatGame } from '../../store/statistic/types';
import { TStatisticPage } from './types';
import { useTheme } from '../Hook/useTheme';

const StatisticPage = ({ getFullStat, fullStatistic, userLogin }: TStatisticPage) => {
    useEffect(() => getFullStat(), []);
    const { colors, theme } = useTheme();
    return (
        <StStatisticPage colors={colors} theme={theme}>
            <Header/>
            <StStatisticContent colors={colors} theme={theme}>
                {
                fullStatistic.length > 0
                        ? fullStatistic.map((game: TStatGame) => (
                            <StatisticCard
                                key={game.uuidGame}
                                draw={game.draw}
                                winnerLogin={game.winnerLogin}
                                gameType={game.gameType}
                                userLogin={userLogin}
                                creatorLogin={game.creatorLogin}
                                guestLogin={game.guestLogin}
                                startTime={game.startTime}
                                finishTime={game.finishTime}
                            />
                    ))
                    : 'nothing to see'
                }
            </StStatisticContent>
            <Footer/>
        </StStatisticPage>
    );
};

export default StatisticPage;
