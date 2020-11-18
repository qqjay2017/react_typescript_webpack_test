const url = require('url')





function urlJoin(...urlString) {
  return url.resolve(...urlString)
}

const verInfo = {
  development:{
    // 开头
    base:'http://localhost:5000/',
  
    // 结尾
    end:'.development.js'
  },
  production: {
    base:'https://cdn.jsdelivr.net/',
    end:'.production.min.js'
  },
 
}

function getHtmlTags(ver = 'production') {
  // console.log(ver)
  // 中间
  const tagUrl = [
    '/npm/react@17.0.1/umd/react',
    '/npm/react-dom@17.0.1/umd/react-dom',
  
  ];



  return tagUrl.map(url => {
    const curVersion = verInfo[ver]
    return urlJoin(curVersion['base'],url) + curVersion['end']
  })

}

function getCdnBaseUrl(ver = 'production'){
  return verInfo[ver]['base']
}



module.exports = {
  getHtmlTags,
  getCdnBaseUrl
}
// console.log(getHtmlTags('production'))