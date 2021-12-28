import common from "./menuObjects/common";
import merchantPay from "./menuObjects/merchantPayments";
import disbursements from "./menuObjects/disbursements";
import accountLinking from "./menuObjects/accountLinking";
import billPayments from "./menuObjects/billPayments";
import internationalTransfers from "./menuObjects/internationalTransfers";
import p2pTransfers from "./menuObjects/p2pTransfers";
import recurringPayments from "./menuObjects/recurringPayments";
import agentService from "./menuObjects/agentService";
// assets
import {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
} from "@tabler/icons";

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
};
// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const pages = {
  id: "pages",
  title: "Pages",
  caption: "",
  type: "group",
  children: [
    {
      id: "common",
      title: "Common",
      type: "collapse",
      icon: icons.IconKey,
      children: common,
    },
    {
      id: "merchantpay",
      title: "Merchant Payments",
      type: "collapse",
      icon: icons.IconKey,
      children: merchantPay,
    },
    {
      id: "disbursement",
      title: "Disbursements",
      type: "collapse",
      icon: icons.IconKey,
      children: disbursements,
    },
    {
      id: "international",
      title: "International Transfers",
      type: "collapse",
      icon: icons.IconKey,
      children: internationalTransfers,
    },
    {
      id: "p2p",
      title: "P2P Transfers",
      type: "collapse",
      icon: icons.IconKey,
      children: p2pTransfers,
    },
    {
      id: "recurring",
      title: "Recurring Payments",
      type: "collapse",
      icon: icons.IconKey,
      children: recurringPayments,
    },
    {
      id: "accountLinking",
      title: "Account Linking",
      type: "collapse",
      icon: icons.IconKey,
      children: accountLinking,
    },
    {
      id: "billPayments",
      title: "Bill Payments",
      type: "collapse",
      icon: icons.IconKey,
      children: billPayments,
    },
    {
      id: "agentService",
      title: "Agent Service",
      type: "collapse",
      icon: icons.IconKey,
      children: agentService,
    },
  ],
};
export default pages;
