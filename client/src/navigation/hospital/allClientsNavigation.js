const navigation = () => {
  return [
    {
      title: 'Client',
      children: [
        {
          title: 'Profile',
          value: '1'
        },
        {
          title: 'Appointment',
          value: '2'
        }
      ]
    },
    {
      title: 'EMR',
      children: [
        {
          title: 'Client notes',
          value: '3'
        },
        {
          title: 'Threatment Plan',
          value: '4'
        },
        {
          title: 'Completed Procedures',
          value: '5'
        },
        {
          title: 'Files',
          value: '6'
        },
        {
          title: 'Prescription',
          value: '7'
        },
        {
          title: 'Time Line',
          value: '8'
        }
      ]
    },
    {
      title: 'Biling',
      children: [
        {
          title: 'Invoices',
          value: '9'
        },
        {
          title: 'Payments',
          value: '10'
        },
        {
          title: 'Ledger',
          value: '11'
        }
      ]
    }
  ]
}

export default navigation
