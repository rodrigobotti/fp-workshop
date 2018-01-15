module.exports = (ids, load, done) => {
  const users = []
  const notify = (user, index) => {
    users[index] = user
    if (users.length >= ids.length) done(users)
  }
  ids.forEach((id, i) => load(id, user => notify(user, i)))
}