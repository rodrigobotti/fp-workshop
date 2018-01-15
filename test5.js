const ids = users => users.map(u => u.id)

module.exports = validUsers => users => ids(users).every(u => ids(validUsers).includes(u))