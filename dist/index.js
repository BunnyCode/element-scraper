import http from 'http'
import https from 'https'


const url = 'https://www.klart.se/se/v%C3%A4stra-g%C3%B6talands-l%C3%A4n/v%C3%A4der-g%C3%B6teborg/'

const getHtmlBody = async (url) => {

  return new Promise(resolve => {
      https.get(url, response => {
        let responseData = ''
      
        response.on('data', (dataChunk) => {
          responseData += dataChunk;
        })

        response.on('end', () => {
          resolve(responseData)
        })
      })
  })
}

async function getData() {
  const htmlBody = await getHtmlBody(url)
  console.log(htmlBody)
}

export default getData
