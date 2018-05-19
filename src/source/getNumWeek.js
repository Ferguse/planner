import moment from 'moment';

const getNumWeek = function (date = new Date(), offset = 0) {
  const offsetDate = date.getTime() + offset * 604800000;
  return moment(offsetDate).isoWeek();
};

export default getNumWeek;
