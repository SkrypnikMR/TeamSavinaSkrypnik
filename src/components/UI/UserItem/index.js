import { connect } from 'react-redux';
import UserItem from './UserItem.jsx';
import { onlineUsersEmails } from '../../../Store/chat/selectors';

const mapStateToProps = state => ({ onlineUsersEmails: onlineUsersEmails(state) });

export default connect(mapStateToProps)(UserItem);
