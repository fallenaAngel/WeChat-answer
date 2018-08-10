import connect from './index.js'
const getUserInfo = (uid, callback) => {
  connect.query('select * from weChat where id=?', [1], function(err, result) {
    if (err) throw err
    // 可以用return 或callback的方式来进行传参
    callback(result)
  })
}
export { getUserInfo }
