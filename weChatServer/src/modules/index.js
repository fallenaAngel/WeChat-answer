import mysql from 'mysql'
let con = mysql.createConnection({
  host: 'localhost', //域名
  user: 'root', //用户就是root
  password: '123456', //登录密码
  database: 'user' //数据库名称
})
con.connect()

export default con
