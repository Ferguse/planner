import moment from 'moment';

export default (year = new Date().getFullYear(),  month = new Date().getMonth()) => Array(moment(`${year}.${month + 1}.01`).daysInMonth()).fill('').map((i, key) => key + 1);