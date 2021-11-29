import {
  SETUP_ACCOUNT_LINK,
  VIEW_ACCOUNT_LINK,
  LINKED_ACCOUNT_TRANSFER,
} from "../../const/paymentTypes";
import { common } from "../Common";
import setupAccountLink from "./setupAccountLink";
import getAccountLink from "./getAccountLink";
import linkedAccountTransfer from "./linkedAccountTransfer";
export default {
  [SETUP_ACCOUNT_LINK]: setupAccountLink,
  [VIEW_ACCOUNT_LINK]: getAccountLink,
  [LINKED_ACCOUNT_TRANSFER]: linkedAccountTransfer,
  ...common,
};
