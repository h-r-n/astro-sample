import { format } from "date-fns";

export const dateFormat = (
  date: Date | string,
  pattern: string = "yyyy年MM月dd日",
): string => {
  const dateObj = new Date(date);
  const output = format(dateObj, pattern);
  return output;
};

export const dateBlogFormat = (
  date: Date | string
): any => {
  const dateObj = new Date(date);
  const yearFormat = format(dateObj, "yyyy");
  const dateFormat = format(dateObj, "MM/dd");
  return {
    year: yearFormat,
    date: dateFormat,
  };
};
