//cdn.jsdelivr.net/npm/react@17.0.1/umd/react.production.min.js" 
// <script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.1/umd/react-dom.production.min.js




const url = require('url')

const version = {
  production:'.production.min.js',
  development: '.development.js'
}

const tagBaseUrl = 'https://cdn.jsdelivr.net'

const tagUrl = [
  '/npm/react-dom@17.0.1/umd/react-dom',
  '/npm/react@17.0.1/umd/react'
]

function urlJoin(...urlString){
  return  urlString.reduce((memo,cur,index)=>{

    if(cur.startsWith('.')){
      memo+=cur
    }else {
            
    }
  },'')
}

function getTags (ver){
  return tagUrl.map(url=>{
    return urlJoin(tagBaseUrl,url,version[ver])
  })

}
getTags('production')