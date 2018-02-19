var moment = require('moment');
const month = ['янв.', 'фев.', 'мар.', 'апр.', 'май.', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'нояб.', 'дек.'];

let getDateForTitle = function (curr) {
    var ru = moment(curr).locale('ru')
    var startOfWeek = ru.startOf('isoweek').toDate();
    var endOfWeek   = ru.endOf('isoweek').toDate();
    var isEqual = (startOfWeek.getMonth() === endOfWeek.getMonth()) ? '' : month[startOfWeek.getMonth()];

    return startOfWeek.getDate() + ' ' + isEqual + ' - ' +
        endOfWeek.getDate() + ' ' + month[endOfWeek.getMonth()]
}

export default getDateForTitle;
