import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getFullStat } from '../../store/statistic/actions';
import StatisticPage from './StatisticPage';
import { fullStatSelector } from '../../store/statistic/selectors';
import { ApplicationState } from '../../store/types';
import { getUserLogin } from '../../store/game/selectors';

const mapStateToProps = (state: ApplicationState) => ({
    fullStatistic: fullStatSelector(state),
    userLogin: getUserLogin(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getFullStat: () => dispatch(getFullStat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticPage);
