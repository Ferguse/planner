const users = {
    '001': {
      name: 'Mary',
      color: '#e440e6',
      workload: {
        '000': {
          weeks: [8, 9],
          percent: 25,
          dates: [
            {
              start: '2018-11-03',
              end: '2018-04-08'
            }
          ]
        },
        '002': {
          weeks: [8, 10],
          percent: 25,
          dates: [
            {
              start: '2018-06-03',
              end: '2018-04-08'
            }
          ]
        }
      }
    },
    '002': {
      name: 'ALex',
      color: '#40b3e6',
      workload: {
        '000': {
          weeks: [10],
          percent: 100,
          dates: [
            {
              start: '2018-05-03',
              end: '2018-04-04'
            }
          ]
        },
        '001': {
          weeks: [10, 11],
          percent: 50,
          dates: [
            {
              start: '2018-10-03',
              end: '2018-04-08'
            }
          ]
        },
        '003': {
          weeks: [10],
          percent: 20,
          dates: [
            {
              start: '2018-03-03',
              end: '2018-04-08'
            }
          ]
        },
        '004': {
          weeks: [0, 1],
          percent: 100,
          dates: [
            {
              start: '2018-02-03',
              end: '2018-04-04'
            }
          ]
        }
      }
    }
  }
;

export default users;
