import { connect } from 'react-redux';
import { ApplicationState } from '../../Store/types';
import { getCheckerDesk } from '../../Store/game/selectors';

import Chessplate from './ChessPlate';

const mapStateToProps = (state: ApplicationState) => ({
    checker: getCheckerDesk(state),
});

export default connect(mapStateToProps)(Chessplate);
