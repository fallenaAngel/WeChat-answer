import upload from '../routers/upload.js'
import getUserInfo from '../routers/getUserInfo.js'
export default function(app) {
  app.get('/', function(req, res, next) {
    res.sendFile('../../public/index.html')
  })
  app.post('/api/upload', upload)
  app.get('/api/getUserInfo', getUserInfo)
}
