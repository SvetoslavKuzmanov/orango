module.exports = async db => {
  // get a reference to User model
  const User = db.model('User')

  // create query
  let query = User.remove()
    .where({ _key: 'eddie' })
    .return()

  // FOR DEMO ONLY - show the AQL
  let aql = await query.toAQL(true)
  console.log(aql.cyan)

  // find first item in users collection
  let rawData = await query.exec()
  console.log('rawData'.green, rawData)

  // convert data to model
  let user = User.fromJSON(rawData)
  console.log('modelData'.green, user)
}