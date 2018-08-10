import express from 'express'
import { getUserInfo } from '../modules/getUserInfo.js'

const router = express.Router()

router.get('/api/getUserInfo', function(req, res) {
  getUserInfo(1, function(result) {
    console.log(result[0])
    res.send({
      uid: 1,
      code: 1,
      msg: '获取用户信息成功',
      username: result[0].userName,
      imgUrl: 'src',
      job: '阿里巴巴前端高级工程师',
      location: result[0].address,
      mine: '精通前端js'
    })
  })
})
export default router
