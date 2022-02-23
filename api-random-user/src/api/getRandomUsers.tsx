import axios from "axios";
import { DataTypes } from "./getRandomUsers.Types";

export const getRandomUsers = async (
  page: number,
  resultsCount: number | string,
  gender: string,
  nation: string
) => {
  const { data } = await axios.get<DataTypes>(
    `https://randomuser.me/api/?page=${page}&results=${resultsCount}&gender=${gender}&nat=${nation}`
  );
  return data;
};
