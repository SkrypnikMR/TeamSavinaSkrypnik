import { connect } from 'react-redux';
import { getUserLogin } from '../../store/game/selectors';
import Winner from './Winner';

const mapStateToProps = store => ({ userLogin: getUserLogin(store) });

export default connect(mapStateToProps)(Winner);
