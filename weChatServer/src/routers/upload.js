import express from 'express'
import fs from 'fs'
import Path from 'path'
import formidable from 'formidable'

const router = express.Router()

router.post('/api/upload', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  let form = new formidable.IncomingForm()

  let baseDir = Path.join(process.cwd(), 'public', 'images')
  form.uploadDir = baseDir // 上传目录
  form.keepExtensions = true // 是否保留图片后缀

  form.parse(req, function(err, fields, files) {
    if (err) throw err
    console.log(files)
    let { path, name } = files.uploadFile
    let targetPath = Path.join(process.cwd(), 'public', 'images', name)
    console.log(process.cwd())
    fs.rename(path, targetPath)
    res.json({
      code: 1,
      msg: '成功',
      path: 'http://localhost:8090/images/' + name
    })
  })
})

export default router
