import {parseDataForElements, parseElementsInnerText, getHtmlData, isHttps} from '../dist/index.js'

const url = 'https://www.klart.se/se/v%C3%A4stra-g%C3%B6talands-l%C3%A4n/v%C3%A4der-g%C3%B6teborg/'
// const url = 'https://oxxygen.io'

const runAllTests = async () => {
  console.info('========================================')
  console.info("Running all tests for defined functions:\n========================================\n")

  const data = await getHtmlData(url)

  // Test is http
  console.info('\nTesting HTTP\n')
  console.info('should return true:', !isHttps('http://dummy.com'))
  console.info('should return false:', isHttps('http://dummy.com'))
  
  // Test is https
  console.info('\nTesting HTTPS\n')
  console.info('should return true:', isHttps('https://dummy.com'))
  console.info('should return false:', isHttps('http://dummy.com'))
  
  // Test getting data
  
  // Test parsedata
  
  console.info('\nTesting parse HTML element RegExp function\n')
  const matches = parseDataForElements(data, 'temp-high')
  // console.log(matches)
  
  console.info('\nTesting parse inner HTML element RegExp function\n')
  const innerMatches = parseElementsInnerText(matches, )
  console.log(innerMatches)

}

runAllTests()