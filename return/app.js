const express = require('express')
const app = express()
const port = 3030

app.get('/exsitCache.jpg', (req, res, next) => {
    //以下設定せずともデフォルトでpublic, max-age=0
    //immutableは chrome では実装されていない？ firefox では上手くいく
    //エラー内容：Provisional headers are shown. Disable cache to see full headers.
    res.set('Cache-Control', ['public', 'max-age=604800', 'immutable'])
    next()
})

app.get('/noneCache.jpg', (req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})