import express from 'express' // import方式的引入，直接用node命令运行的话会报错，解析不了，所以可以用Babel解析
import Path from 'path'

import routes from './config/router.js'

const app = express()
const cwd = Path.join(process.cwd(), 'public')

app.use(express.static(cwd)) // 设置静态资源路径
routes(app)

app.listen(8090, function() {
  console.log('server is running in http://localhost:8090')
})
