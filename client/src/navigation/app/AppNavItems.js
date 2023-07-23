const navigation = () => {
  return [
    {
      title: 'Patient',
      path: '/patient',
      icon: 'mdi:patient'
    },
    {
      title: 'Doctors',
      path: '/doctors',
      icon: 'healthicons:doctor-male'
    },
    {
      title: 'Hospital',
      path: '/hospital',
      icon: 'cil:hospital'
    },
    {
      title: 'Home',
      path: '/Hotel/Home',
      icon: 'tabler:map-pin-filled'
    },
    {
      title: 'Details',
      path: '/Hotel/Details',
      icon: 'tabler:calendar-event'
    },
    {
      path: '/Hotel/Searchs',
      action: 'read',
      subject: 'acl-page',
      title: 'Search',
      icon: 'tabler:map-pin-filled'
    },
    {
      path: '/Hotel/Invoice',
      action: 'read',
      subject: 'acl-page',
      title: 'Invoice',
      icon: 'tabler:wallet'
    },
  ]
}

export default navigation
