const projects = [
  {
    id: '001',
    title: 'Styles',
    content: 'Lorem ipsum',
    color: 'blue',
    users: ['Mary', 'ALex'],
    workload: [
      {
        weeks: [8, 9],
        user: 'Mary',
        percent: 25,
        dates: [
          {
            start: '2018-11-03',
            end: '2018-04-08'
          }
        ]
      },
      {
        weeks: [10],
        user: 'ALex',
        percent: 100,
        dates: [
          {
            start: '2018-05-03',
            end: '2018-04-04'
          }
        ]
      }
    ],
    history: []
  },
  {
    id: '002',
    title: 'Museum: develop',
    content: 'Lorem ipsum',
    color: 'pink',
    users: ['ALex'],
    workload: [
      {
        weeks: [10, 11],
        user: 'ALex',
        percent: 50,
        dates: [
          {
            start: '2018-10-03',
            end: '2018-04-08'
          }
        ]
      }
    ],
    history: []
  },
  {
    id: '003',
    title: 'Platform',
    content: 'Lorem ipsum',
    color: 'purple',
    users: ['Mary'],
    workload: [
      {
        weeks: [8, 10],
        user: 'Mary',
        percent: 25,
        dates: [
          {
            start: '2018-06-03',
            end: '2018-04-08'
          }
        ]
      }
    ],
    history: []
  },
  {
    id: '004',
    title: 'Code review',
    content: 'Lorem ipsum',
    color: 'orange',
    users: ['ALex'],
    workload: [
      {
        weeks: [10],
        user: 'ALex',
        percent: 20,
        dates: [
          {
            start: '2018-03-03',
            end: '2018-04-08'
          }
        ]
      }
    ],
    history: []
  },
  {
    id: '005',
    title: 'Holiday',
    content: 'Lorem ipsum',
    color: '#d8d8d8',
    users: ['ALex'],
    workload: [
      {
        weeks: [0, 1],
        user: 'ALex',
        percent: 100,
        dates: [
          {
            start: '2018-02-03',
            end: '2018-04-04'
          }
        ]
      }
    ],
    history: []
  }
];

export default projects;
