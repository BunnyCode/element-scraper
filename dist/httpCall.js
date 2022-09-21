import http from 'http'
import https from 'https'

export default class HttpCall {
  url
  constructor(url){
    this.url = url
  }


  // checks if url starts with https
  isHttps = () => {
    const protocol = this.url.split(':')[0]
    if (protocol.toLowerCase() === 'https'){
      return true
    }
    return false
  }


  // Gets raw html from url
  getRawHtml = async () => {
    return new Promise(resolve => {
      try {
        if (this.isHttps(this.url)){
          https.get(this.url, response => {
            this.getHtmlDataFeed(response, resolve)
          })
        } else {
          http.get(this.url, response => {
            this.getHtmlDataFeed(response, resolve)
          })
        }    
      } catch (error) {
        console.error(error)
      }
    })
  }


  // Get html chunks untill we have full page then resolve.
  getHtmlDataFeed = (response, resolve) => {
    let responseData = ''
    response.on('data', (dataChunk) => responseData += dataChunk)
    response.on('end', () => resolve(responseData))
  }
}