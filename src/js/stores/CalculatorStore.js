import { createStore } from 'redux';
import calculator from '../reducers/calculator';

const CalcStore = createStore(calculator);

export default CalcStore;
