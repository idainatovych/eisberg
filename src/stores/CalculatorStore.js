import { createStore } from 'redux';
import calculator from '../reducers/calculator';

let CalcStore = createStore(calculator);

export default CalcStore;