import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const configureStore = railsProps => (
  createStore(rootReducer, railsProps)
);

export default configureStore;
