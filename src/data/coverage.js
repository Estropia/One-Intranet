export const coverage = [
  { province: 'Pangasinan', count: 27, towns: ['Alaminos', 'Bani', 'Dasol', 'Lingayen', 'Sta. Barbara'] },
  { province: 'Ilocos Norte', count: 43, towns: ['Badoc', 'Pinili'] },
  { province: 'Sorsogon (Bicol)', count: 5, towns: ['Gubat'] },
]
export const coverageTotal = coverage.reduce((n, c) => n + c.count, 0)
