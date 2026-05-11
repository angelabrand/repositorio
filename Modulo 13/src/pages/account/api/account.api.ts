import Axios from "axios";
import { Account } from "./account.api-model";

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL || "http://localhost:3000";
const url = `${API_BASE_URL}/account-list`;

export const saveAccount = (account: Account): Promise<Account> =>
  Axios.post<Account>(url, account).then(({ data }) => data);
