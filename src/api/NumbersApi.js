const BASE_URL = "http://numbersapi.com";

export const GetNumberApi = async (number) => {
  const res = await fetch(`${BASE_URL}/${number}?json`);
  return res.json();
};

export const GetMathApi = async () => {
  const res = await fetch(`${BASE_URL}/random/math?json`);
  return res.json();
};

export const GetTriviaApi = async () => {
  const res = await fetch(`${BASE_URL}/random/trivia?json`);
  return res.json();
};

export const GetDateApi = async () => {
  const res = await fetch(`${BASE_URL}/random/date?json`);
  return res.json();
};

export const GetYearApi = async () => {
  const res = await fetch(`${BASE_URL}/random/year?json`);
  return res.json();
};
