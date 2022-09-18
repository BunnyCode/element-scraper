import {parseDataForElement, getHtmlData} from '../dist/index.js'

// const url = 'https://www.klart.se/se/v%C3%A4stra-g%C3%B6talands-l%C3%A4n/v%C3%A4der-g%C3%B6teborg/'
const url = 'https://oxxygen.io'

const runAllTests = async () => {
  console.info('========================================')
  console.info("Running all tests for defined functions:\n========================================\n")

  const data = await getHtmlData(url)

  // Test is http
  
  // Test is https
  
  // Test getting data
  
  // Test parsedata
  parseDataForElement('arrow', data)

}

runAllTests()