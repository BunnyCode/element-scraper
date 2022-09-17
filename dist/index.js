import http from 'http'
import https from 'https'


/**
 * Returns promise, resulting in a string, will take HTTP or HTTPS url's.
 *
 * @param {string} url - URL to get body from.
 * @returns Promise - when resolved this is a string.
 */
const getHtmlBody = async (url) => {
  return new Promise(resolve => {
      console.log(isHttps(url))
      if (isHttps(url)){
        https.get(url, response => {
          let responseData = ''
          response.on('data', (dataChunk) => responseData += dataChunk)
          response.on('end', () => resolve(responseData))
        })
      }
  })
}


// EXPORTED FUNCTIONS

const isHttps = (url) => {
  const protocol = url.split(':')[0]
  if (protocol.toLowerCase() === 'https'){
    return true
  }
  return false
}

/**
 * 
 * @param {string} url 
 */
const getHtmlData = async(url) => {
  const htmlBody = await getHtmlBody(url)
  return htmlBody
}

const parseData = () => {
  console.log('usuck')
}


export {getHtmlData, parseData, isHttps}
