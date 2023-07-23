import React from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Icon } from '@iconify/react';

export const Sidebar = [
  {
    id: 0,
    title: 'Dashboard',
    url: '/CurrencyExchange/Dashboard',
    icon: <Icon icon="ic:twotone-dashboard" />
  },
  {
    id: 1,
    title: 'Send Money',
    url: '#',
    icon: <Icon icon="clarity:coin-bag-line" />,
    dropdown:[{
        id:0,
        title:  'At Verto Rate',
        url: '/CurrencyExchange/VertoRate'
    },
    {
        id:1,
        title:  'At Desired Rate',
        url: '/CurrencyExchange/DesiredRate'
    }
]
  },
  {
    id:2,
    title: 'Marketplace',
    url: '/CurrencyExchange/MarketPlace',
    icon: <Icon icon="mdi:marketplace-outline" />,
  },
  {
    id:3,
    title: 'E-Wallet',
    url: '/CurrencyExchange/EWallet',
    icon: <Icon icon="clarity:wallet-line" />,
  },
  {
    id:4,
    title: 'Bank Account',
    url: '/CurrencyExchange/BankAccount',
    icon: <Icon icon="bi:bank" />,
  },
  {
    id:5,
    title: 'Transaction History',
    url: '/CurrencyExchange/Transactions',
    icon: <Icon icon="ri:coins-line" />,
  },
  {
    id:6,
    title: 'Beneficiaries',
    url: '/CurrencyExchange/beneficiaries',
    icon: <Icon icon="clarity:bank-solid" />,
  },
  {
    id:7,
    title: 'Management',
    url: '/CurrencyExchange/Management',
    icon: <Icon icon="pajamas:settings" />,
  },
  {
    id:8,
    title: 'Share your Feedback',
    url: '/CurrencyExchange/feedback',
    icon: <Icon icon="mdi:feedback-outline" />,
  }
];

export const dashboard_icon = [
 
  {
    id: 1,
    title: 'Send Money',
    purpose: 'Manage',
    url: '/CurrencyExchange/VertoRate',
    icon: <Icon icon="clarity:coin-bag-line" />,
  },
  
  {
    id:2,
    title: 'Bank Account',
    purpose: 'Manage',
    url: '/CurrencyExchange/BankAccount',
    icon: <Icon icon="bi:bank" />,
  },
  {
    id:3,
    title: 'E-Wallet',
    purpose: 'Manage',
    url: '/CurrencyExchange/EWallet',
    icon: <Icon icon="clarity:wallet-line" />,
  },
  {
    id:4,
    title: 'Transaction',
    purpose: 'Manage',
    url: '/CurrencyExchange/Transactions',
    icon: <Icon icon="ri:coins-line" />,
  },
];

export const Header = [
  {
    id: 1,
    icon: <Icon icon="et:chat" />,
    url: "#"
  },
  {
    id: 2,
    icon: <Icon icon="fluent:mail-24-regular" />,
    url: "/CurrencyExchange/MailNotification"
  },
  {
    id: 3,
    icon: <Icon icon="mdi:bell-outline" />,
    notifications: true,
    url: "#"

  },
  {
    id: 4,
    icon: <Icon icon="codicon:account" />,
    url: "#"

  }

]

export const mr_Orders = [
  {
    order_id: 'En-16112021-107',
    oredr_date: 'Nov16, 2021',
    from: 'GBP 100.00',
    rate:110,
    to: 'USD 100.00',
    agreed_rate: '1GBP = 1.589494 USD',
    status: 'Funds transfered to the recipient'
  },
  {
    order_id: 'En-16552021-108',
    oredr_date: 'Nov15, 2021',
    from: 'INR 100.00',
    rate:110,
    to: 'GBP 100.00',
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Awaiting details'
  },
  {
    order_id: 'En-16532021-109',
    oredr_date: 'Nov13, 2021',
    from: 'INR 100.00',
    rate:110,
    to: 'GBP 200.00',
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Awaiting confermation'
  },
  {
    order_id: 'En-11532021-110',
    oredr_date: 'Nov12, 2021',
    from: 'INR 100.00',
    to: 'GBP 1800.00',
    rate:110,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Awaiting incoming funds confermation'
  },
 

]
export const trHistory = [
  {
    order_id: 'En-16112021-107',
    oredr_date: 'Nov16, 2021 6:00 PM',
    from: 'GBP 100.00',
    to: 'USD 100.00',
    rate:76.210,
    agreed_rate: '1GBP = 1.589494 USD',
    status: 'Funds transfered to the recipient'
  },
  {
    order_id: 'En-16112021-107',
    oredr_date: 'Nov16, 2021 6:00 PM',
    from: 'GBP 100.00',
    to: 'USD 100.00',
    rate:76.210,
    agreed_rate: '1GBP = 1.589494 USD',
    status: 'Funds transfered to the recipient'
  },
  
  {
    order_id: 'En-16552021-108',
    oredr_date: 'Nov15, 2021 2:00 PM',
    from: 'INR 100.00',
    to: 'GBP 100.00',
    awaits: true,
    rate:9845.000,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Awaiting incoming funds confermation'
  },
  {
    order_id: 'En-16532021-109',
    oredr_date: 'Nov13, 2021 8:00 PM',
    from: 'INR 100.00',
    to: 'GBP 200.00',
    rate:786.000,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Awaiting incoming funds confermation'
  },
  {
    order_id: 'En-11532021-110',
    oredr_date: 'Nov12, 2021 3:00 PM',
    from: 'INR 100.00',
    to: 'GBP 1800.00',
    rate:90.050,
    awaits: true,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Awaiting incoming funds confermation'
  },
  {
    order_id: 'En-11932021-111',
    oredr_date: 'Nov12, 2021 3:40 PM',
    from: 'INR 100.00',
    to: 'GBP 1800.00',
    rate:43.670,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Awaiting incoming funds confermation'
  },
  {
    order_id: 'En-11432021-112',
    oredr_date: 'Nov10, 2021 7:00 PM',
    from: 'INR 100.00',
    to: 'GBP 1800.00',
    awaits: true,
    rate:154.670,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Funds transfered to the recipient'
  },
  {
    order_id: 'En-11502021-115',
    oredr_date: 'Nov12, 2021 3:00 PM',
    from: 'INR 100.00',
    to: 'GBP 3200.00',
    rate:121.980,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Awaiting incoming funds confermation'
  },
  {
    order_id: 'En-11432021-112',
    oredr_date: 'Nov10, 2021 7:00 PM',
    from: 'INR 100.00',
    to: 'GBP 1800.00',
    awaits: true,
    rate:78.90,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Funds transfered to the recipient'
  },
  {
    order_id: 'En-11432021-112',
    oredr_date: 'Nov10, 2021 7:00 PM',
    from: 'INR 100.00',
    to: 'GBP 1800.00',
    rate:32.000,
    agreed_rate: '1INR = 1.589494 USD',
    status: 'Funds transfered to the recipient'
  },

]
export const notification_trends =[
  {
    title: 'notify',
    list: [
      {
        id: 0, name: 'All'
      },
      {id: 1, name: 'Recipitents'},
      {id: 2, name: 'Order'},
      {id: 3, name: 'Friend Request'},
      {id: 4, name: 'Profile'},
       {id: 5, name: 'Report'},
    ]
  },
  {
    title:'content',
    list: [
      {
        id:0,
       icon: <Icon icon="fluent:mail-24-regular" />,
       report: "Your report is ready",
       msg:"Notification"
      },
      {
        id:1,
       icon: <Icon icon="fluent:mail-24-regular" />,
       report: "Your report is ready",
       msg:"Notification"
      },
      {
        id:2,
       icon: <Icon icon="fluent:mail-24-regular" />,
       report: "Your report is ready",
       msg:"Notification"
      },
      {
        id:3,
       icon: <Icon icon="fluent:mail-24-regular" />,
       report: "Your report is ready",
       msg:"Notification"
      },
      {
        id:4,
       icon: <Icon icon="fluent:mail-24-regular" />,
       report: "Your report is ready",
       msg:"Notification"
      },
      {
        id:5,
       icon: <Icon icon="fluent:mail-24-regular" />,
       report: "Your report is ready",
       msg:"Notification"
      },
      {
        id:6,
       icon: <Icon icon="fluent:mail-24-regular" />,
       report: "Your report is ready",
       msg:"Notification"
      },
      {
        id:7,
       icon: <Icon icon="fluent:mail-24-regular" />,
       report: "Your report is ready",
       msg:"Notification"
      }
    ]
  }
]

export const notificationSidebar = [
  {
    id: 1,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 2,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 3,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 4,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 5,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 6,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 7,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 8,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 9,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  },
  {
    id: 10,
    title: 'Your order report is ready',
    time: '1 week ago',
    icon: <Icon icon="streamline-emojis:bell" />
  }

]

export const notification = [
  {
    id: 1,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 2,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 3,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 4,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 5,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 6,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 7,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 8,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 9,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
  {
    id: 10,
    title: 'Notifications',
    icon: <Icon icon="fluent:mail-24-regular" />
  },
]
export const Searchs = [
  {
    id: 0,
    title: 'Select',
  },
  {
    id: 1,
    title: 'Send Money At Verto Rate',
    verto: true
  },
  {
    id: 2,
    title: 'Send Money At Desired Rate',
    desired:true
  },
  {
    id: 3,
    title: 'Convert Within Wallet',
    convert: true
  },
  {
    id: 4,
    title: 'Add Beneficiary Account',
    account:true
  }
]

export const eWallets = [
  {
    order_id: 'En-16112021-107',
    oredr_date: 'Nov16, 2021 6:00 PM',
    credit: '',
    debit: '(-)USD 30,000.0',
    balance: '1289384.90',
    withdraw: 'Withdrawal',
    status: "Completed",
    description: 'Paid for order',
  },
  {
    order_id: 'En-16552021-108',
    oredr_date: 'Nov15, 2021 2:00 PM',
    credit: '',
    debit: '(-)USD 21,000.0',
    balance: '11349384.90',
    withdraw: 'Withdrawal',
    status: "Completed",
    description: 'Paid for order',
  },
  {
    order_id: 'En-16532021-109',
    oredr_date: 'Nov13, 2021 8:00 PM',
    credit: '',
    debit: '(-)USD 30,000.0',
    balance: '1289384.90',
    withdraw: 'Withdrawal',
    status: "Completed",
    description: 'Paid for order',
  },
  {
    order_id: 'En-11532021-110',
    oredr_date: 'Nov12, 2021 3:00 PM',
    credit: '',
    debit: '(-)USD 43,000.0',
    balance: '1289384.90',
    withdraw: 'Withdrawal',
    status: "Completed",
    description: 'Paid for order'
  },
  {
    order_id: 'En-11932021-111',
    oredr_date: 'Nov12, 2021 3:40 PM',
    credit: '',
    debit: '(-)USD 62,000.0',
    balance: '1289384.90',
    withdraw: 'Withdrawal',
    status: "Completed",
    description: 'Paid for order',
  },
  {
    order_id: 'En-11432021-112',
    oredr_date: 'Nov10, 2021 7:00 PM',
    credit: '',
    debit: '(-)USD 29,000.0',
    balance: '1289384.90',
    withdraw: 'Withdrawal',
    status: "Completed",
    description: 'Paid for order',
  },
  {
    order_id: 'En-11502021-115',
    oredr_date: 'Nov12, 2021 3:00 PM',
    credit: '',
    debit: '(-)USD 70,000.0',
    balance: '1289384.90',
    withdraw: 'Withdrawal',
    status: "Completed",
    description: 'Paid for order',
  },

]