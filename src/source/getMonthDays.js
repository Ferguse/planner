import moment from 'moment';

export default Array(moment().daysInMonth()).fill('').map((i, key) => key + 1);