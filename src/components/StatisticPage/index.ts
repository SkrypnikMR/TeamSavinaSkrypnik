import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getFullStat } from '../../store/statistic/actions';
import StatisticPage from './StatisticPage';
import { fullStatSelector } from '../../store/statistic/selectors';
import { ApplicationState } from '../../store/types';

const mapStateToProps = (state: ApplicationState) => ({ fullStatistic: fullStatSelector(state) });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getFullStat: () => dispatch(getFullStat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticPage);
