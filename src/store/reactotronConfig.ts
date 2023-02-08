import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure({ name: 'GP Redux Workshop' })
  .use(reactotronRedux())
  .use(sagaPlugin({ except: [''] }))
  .connect();

export default reactotron;
