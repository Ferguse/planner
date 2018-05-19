const moment = require('moment');

const month = ['янв.', 'фев.', 'мар.', 'апр.', 'май.', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'нояб.', 'дек.'];

const getDateForTitle = function (curr) {
  const ru = moment(curr).locale('ru');
  const startOfWeek = ru.startOf('isoweek').toDate();
  const endOfWeek = ru.endOf('isoweek').toDate();
  const isEqual = (startOfWeek.getMonth() === endOfWeek.getMonth()) ? '' : month[startOfWeek.getMonth()];

  return `${startOfWeek.getDate()} ${isEqual} - ${
    endOfWeek.getDate()} ${month[endOfWeek.getMonth()]}`;
};

export default getDateForTitle;
