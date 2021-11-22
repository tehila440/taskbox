import { Provider } from "react-redux";
import store from "./lib/redux";
//import TaskList from "./components/TaskList";
import InboxScreen from './components/InboxScreen'

import './index.css'



function App() {
  return (
    <Provider store={store}>
    {/* <TaskList /> */}
    <InboxScreen />
  </Provider>
  );
}

export default App;
