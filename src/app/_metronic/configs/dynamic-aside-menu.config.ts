export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboard',
      root: true,
      icon: 'flaticon2-architecture-and-city',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
      bullet: 'dot',
    },
    {
      title: 'Calendar',
      root: true,
      page: '/calendar',
      svg: './assets/media/svg/icons/Design/Select.svg',
      // submenu : [
      //   {
          
      //   }
      // ]
    },
    { section: 'Lead' },
    {
      title: 'Create New Lead',
      root: true,
      bullet: 'dot',
      page: '/create-lead',
      svg: './assets/media/svg/icons/Navigation/Angle-right.svg'
    },
    {
      title: 'View All Leads',
      root: true,
      bullet: 'dot',
      page: '/leads',
      svg: './assets/media/svg/icons/Navigation/Angle-right.svg'
 
    },
    { section: 'COLLECTION CENTER' },
    {
      title: 'All Collections',
      bullet: 'dot',
      svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
      root: true,
      permission: 'accessToECommerceModule',
      page: '/collection-list',
    },
    {
      title: 'Add Collection',
      root: true,
      bullet: 'dot',
      svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
      page: '/collection-add',
    },
    // {
    //   title: 'Edit Contact',
    //   root: true,
    //   bullet: 'dot',
    //   svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
    //   page: '/collection-edit',
    // },
    // { section: 'Referals' },
    // {
    //   title: 'List Columns',
    //   bullet: 'dot',
    //   icon: 'flaticon2-list-2',
    //   svg: './assets/media/svg/icons/Shopping/Cart3.svg',
    //   root: true,
    //   permission: 'accessToECommerceModule',
    //   page: '/referral-list',
    // },
    // {
    //   title: 'List Datatable',
    //   root: true,
    //   bullet: 'dot',
    //   icon: 'flaticon2-user-outline-symbol',
    //   svg: './assets/media/svg/icons/General/User.svg',
    //   page: '/referral-table',
    // },
    // {
    //   title: 'View Contact',
    //   root: true,
    //   bullet: 'dot',
    //   icon: 'flaticon2-user-outline-symbol',
    //   svg: './assets/media/svg/icons/General/User.svg',
    //   page: '/referral-view',
    // },
    // {
    //   title: 'Add Contact',
    //   root: true,
    //   bullet: 'dot',
    //   icon: 'flaticon2-user-outline-symbol',
    //   svg: './assets/media/svg/icons/General/User.svg',
    //   page: '/referral-add',
    // },
    // {
    //   title: 'Edit Contact',
    //   root: true,
    //   bullet: 'dot',
    //   icon: 'flaticon2-user-outline-symbol',
    //   svg: './assets/media/svg/icons/General/User.svg',
    //   page: '/referral-edit',
    // },
    { section: 'Tests' },
    {
      title: 'Create New Test',
      bullet: 'dot',
      svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
      root: true,
      permission: 'accessToECommerceModule',
      page: '/create-test',
    },  
    // {
    //   title: 'Edit Test',
    //   bullet: 'dot',
    //   svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
    //   root: true,
    //   permission: 'accessToECommerceModule',
    //   page: '/test-edit',
    // }, 
    // {
    //   title: 'View Test',
    //   bullet: 'dot',
    //   icon: 'flaticon2-list-2',
    //   svg: './assets/media/svg/icons/Shopping/Cart3.svg',
    //   root: true,
    //   permission: 'accessToECommerceModule',
    //   page: '/test-view',
    // },   
    {
      title: 'View All Tests',
      bullet: 'dot',
      svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
      root: true,
      permission: 'accessToECommerceModule',
      page: '/test-list',
    },
    { section : 'Timesheet'},
    {
      title: 'Institutions',
      root: true,
      bullet: 'dot',
      page: '/ngbootstrap',
      svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
      submenu: [
        {
          title: 'Institutes List',
          page: '/institute/list'
        },
        // {
        //   title: 'View Projects',
        //   page: '/institute/view'
        // },
        {
          title: 'Add Institute',
          page: '/institute/add'
        },
        // {
        //   title: 'Edit Projects',
        //   page: '/institute/edit'
        // }
      ]
    },
    // {
    //   title: 'Entries',
    //   bullet: 'dot',
    //   svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
    //   root: true,
    //   page: '/timesheet/entries',
    // },
    // {
    //   title: 'Doctor',
    //   root: true,
    //   bullet: 'dot',
    //   page: '/ngbootstrap',
    //   svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
    //   submenu: [
    //     {
    //       title: 'Add Contact',
    //       page: '/timesheet/doctor/add'
    //     },
    //     {
    //       title: 'Edit Contact',
    //       page: '/timesheet/doctor/edit'
    //     },
    //     {
    //       title: 'View Contact',
    //       page: '/timesheet/doctor/view'
    //     },
    //     {
    //       title: 'Contact list',
    //       page: '/timesheet/doctor/list'
    //     },
    //     {
    //       title: 'Contact list datatable',
    //       page: '/timesheet/doctor/table'
    //     }
    //   ]
    // },
    // {section: 'Reports'},
    // {
    //   title: 'Lead',
    //   bullet: 'dot',
    //   icon: 'flaticon2-list-2',
    //   svg: './assets/media/svg/icons/Shopping/Cart3.svg',
    //   root: true,
    //   permission: 'accessToECommerceModule',
    //   page: '/reports/lead',
    // },
    // {
    //   title: 'Timesheet',
    //   bullet: 'dot',
    //   icon: 'flaticon2-list-2',
    //   svg: './assets/media/svg/icons/Shopping/Cart3.svg',
    //   root: true,
    //   permission: 'accessToECommerceModule',
    //   page: '/reports/timesheet',
    // },
    // {section : 'User Manegement'},
    // {
    //   title: 'User',
    //   root: true,
    //   bullet: 'dot',
    //   page: '/ngbootstrap',
    //   icon: 'flaticon2-digital-marketing',
    //   svg: './assets/media/svg/icons/Shopping/Bitcoin.svg',
    //   submenu: [
    //     {
    //       title: 'Add User',
    //       page: '/add-user'
    //     },
    //     {
    //       title: 'Edit User',
    //       page: '/edit-user'
    //     },
    //     {
    //       title: 'List View',
    //       page: '/users'
    //     },
    //     {
    //       title: 'Datatable View',
    //       page: '/users-table'
    //     }
    //   ]
    // },
    // {section : 'System'},
    // {
    //   title: 'Settings',
    //   root: true,
    //   bullet: 'dot',
    //   page: '/ngbootstrap',
    //   icon: 'flaticon2-digital-marketing',
    //   svg: './assets/media/svg/icons/Shopping/Bitcoin.svg',
    // },
    {section: 'Other Pages'},
    {
      title: 'Login',
      bullet: 'dot',
      svg: './assets/media/svg/icons/Navigation/Angle-right.svg',
      root: true,
      page: '/login',
    }
  ]
};
