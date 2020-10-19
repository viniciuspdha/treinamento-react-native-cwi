import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";

const reactotron = Reactotron.useReactNative()
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect();

export default reactotron;
