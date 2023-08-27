import moment from "moment-mini"

export const convertToTime = (date: Date) => {
  return moment(date).toDate().getTime();
}

export const formatDate = (
  date: Date,
  format: string
) => {
  return moment(date).format(format);
}