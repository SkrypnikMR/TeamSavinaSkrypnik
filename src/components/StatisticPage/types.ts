import { TFullStat } from '../../store/statistic/types';

export type TStatisticPage = {
    userLogin: string;
    getFullStat: () => void;
    fullStatistic: TFullStat;
}
