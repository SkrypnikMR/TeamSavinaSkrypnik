import App from './App';
import { connect } from 'react-redux';
import { userTheme, userThemeMode } from '/src/Store/user/selectors';

const mapStateToProps = state => ({
  userTheme: userTheme(state),
  userThemeMode: userThemeMode(state),
});

export default connect(mapStateToProps)(App);
