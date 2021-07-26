import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import GameContent from './GameContent';
import { getWinner } from '../../store/game/selectors';
import { cleanOldGame } from '../../store/game/actions';

const mapStateToProps = store => ({ winner: getWinner(store) });
const mapDispatchToProps = (dispatch: Dispatch) => ({ cleanOldGame: () => dispatch(cleanOldGame()) });

export default connect(mapStateToProps, mapDispatchToProps)(GameContent);
