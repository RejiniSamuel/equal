// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    {
    id:1,
    licFirstName: 'Roshni',
    licLastName: 'Samuel',
    licNo: '8793',
    licExpDate: '12/18',
    licStatus: 'red'
  },
  {
    id:2,
    licFirstName: 'Rejini',
    licLastName: 'Samuel',
    licNo: '56456',
    licExpDate: '02/19',
    licStatus: 'yellow'
  },
  {
    id:3,
    licFirstName: 'Testa',
    licLastName: 'TestaL',
    licNo: '457',
    licExpDate: '12/19',
    licStatus: 'green'
  },
    {
    id:1,
    licFirstName: 'Roshni',
    licLastName: 'Samuel',
    licNo: '8793',
    licExpDate: '12/18',
    licStatus: 'red'
  },
  {
    id:2,
    licFirstName: 'Rejini',
    licLastName: 'Samuel',
    licNo: '56456',
    licExpDate: '02/19',
    licStatus: 'yellow'
  },
  {
    id:3,
    licFirstName: 'Testa',
    licLastName: 'TestaL',
    licNo: '457',
    licExpDate: '12/19',
    licStatus: 'green'
  }
  ],
  all: function() { return this.players},
  get: function(licNo) {
    const isPlayer = p => p.licNo === licNo
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI
