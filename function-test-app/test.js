import {greedySingleLineDateForElements,
        getHtmlData,
        isHttps,
        hasCorrectHtmlProtocol,
        nonGreedyFindSingleLineElementsInnerText,
        greedyFindMultiLineElementsByAttributeOrText,
        nonGreedyMultiLineElementsByType,
        greedyFindMultiLineElementsByType,

      } from '../dist/index.js'


const url = 'https://bunnycode.github.io/element-scraper/'
const incorrectUrl = 'ftp://bunnycode.github.io/element-scraper/'

const consoleLine = () => {
  console.info("\n================\n")
}

const runAllTests = async () => {
  console.info('========================================')
  console.info("Running all tests for defined functions:\n========================================\n")

  // Test getting data
  const testData = await getHtmlData(url)

  // Test is http
  consoleLine()
  console.info('\nTesting protocol FTP agains isHttps\n')
  console.info('should return false:', isHttps(incorrectUrl))
  
  // Test is http
  consoleLine()
  console.info('isHttps()\n\nTesting HTTP (!isHttps and isHttps)\n')
  console.info('should return true:', !isHttps('http://dummy.com'))
  console.info('should return false:', isHttps('http://dummy.com'))
  
  // Test is https
  consoleLine()
  console.info('isHttps()\n\nTesting HTTPS (real https and http)\n')
  console.info('should return true:', isHttps(url))
  console.info('should return false:', isHttps('http://dummy.com'))
  
  
  // Test parsedata
  consoleLine()
  console.info('\nTesting parse HTML element RegExp function\nGot: ')
  const matches = greedySingleLineDateForElements(testData, 'inner2')
  console.log(matches)
  console.log("\nExpected:\n[ \"<div id='inner2' class='di2'>This is inner 2</div></div>\" ]")
  
  // Test inner text parse
  consoleLine()
  console.info('\nTesting parse inner HTML element RegExp function\n')
  let innerMatches = nonGreedyFindSingleLineElementsInnerText(matches, true)
  console.info("Should contain empty slots in array")
  console.log(innerMatches)
  innerMatches = nonGreedyFindSingleLineElementsInnerText(matches)
  console.info("Should NOT contain empty slots in array")
  console.log(innerMatches)

  // Test multiline parse
  consoleLine()
  console.info('\nTesting multiline HTML element RegExp parse function (div with class end)\n')
  console.log(greedyFindMultiLineElementsByAttributeOrText(testData, 'div'))
}

runAllTests()