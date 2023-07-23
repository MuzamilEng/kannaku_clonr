const navigation = {
navList: [
    {
      title: 'Calendar',
      path: '/calendar',
      icon: 'material-symbols:calendar-add-on',
      value: '1'
    },
    {
      title: 'Patients',
      path: '/patients',
      icon: 'bx:book-add',
      value: '2'
    },
    {
      title: 'Communications',
      path: '/communications',
      icon: 'mdi:radio-tower',
      value: '3'
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: 'gridicons:stats',
      value: '4'
    },
    {
      title: 'BackOffice',
      icon: 'mdi:office-building',
      children: [
        {
          title: 'Inventory',
          path: '/back-office/inventory',
          icon: 'mingcute:coin-2-line',
          value: '5'
        },
        {
          title: 'Expenses',
          path: '/back-office/expenses',
          icon: 'bi:cash-stack',
          value: '6'
        }
      ]
    },
    {
      title: 'Profile',
      path: '/profile',
      icon: 'gg:profile',
      value: '7'
    },
    {
      title: 'Prime',
      path: '/prime',
      icon: 'cil:badge',
      value: '8'
    },
    {
      title: 'Feedback',
      path: '/feedback',
      icon: 'material-symbols:thumb-up-outline',
      value: '9'
    },
    {
      title: 'Reach',
      path: '/reach',
      icon: 'ph:speaker-high-bold',
      value: '10'
    },
    {
      title: 'Consult',
      path: '/consult',
      icon: 'bx:chat',
      value: '11'
    },
    {
      title: 'Health Feed',
      path: '/health-feed',
      icon: 'majesticons:paper-fold-text-line',
      value: '12'
    }
  ]
}


export default navigation
