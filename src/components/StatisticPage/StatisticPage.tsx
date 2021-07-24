import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import StatisticCard from '../StatisticCard';
import { StStatisticPage, StStatisticContent } from './styled';

const StatisticPage = ({ getFullStat, fullStatistic }) => {
    useEffect(() => getFullStat(), []);
    console.log(fullStatistic);
    return (
        <StStatisticPage>
            <Header/>
            <StStatisticContent>
{
                fullStatistic.length > 0
                        ? fullStatistic.map(game => (
                            <StatisticCard
                                key={game.uuidGame}
                                draw={game.draw}
                                winnerLogin={game.winnerLogin}
                                gameType={game.gameType}
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
