import {greedyFindSingleLineElements,
        getHtmlData,
        isHttps,
        hasCorrectHtmlProtocol,
        nonGreedyFindSingleLineElementsInnerText,
        greedyFindMultiLineElementsByAttributeOrText,
        nonGreedyFindMultiLineElementsByType,
        greedyFindMultiLineElementsByType,

      } from '../dist/index.js'

import {
  trParseOutput,
  classDivEndOuput
} from './testExpectedOutput.js'


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


  // Test is hasCorrectHtmlProtocol
  consoleLine()
  console.info('\nhasCorrectHtmlProtocol()\n\nTesting if url starts with http\n')
  console.info('should return false:', hasCorrectHtmlProtocol(incorrectUrl), incorrectUrl)
  console.info('should return true:', hasCorrectHtmlProtocol(url), url)
  // Test is http
  consoleLine()
  console.info('\nTesting protocol FTP agains isHttps\n')
  console.info('should return false:', isHttps(incorrectUrl), incorrectUrl)
  

  // Test is http
  consoleLine()
  console.info('isHttps()\n\nTesting HTTP (!isHttps and isHttps)\n')
  console.info('should return true:', !isHttps('http://dummy.com'), '(http://dummy.com)')
  console.info('should return false:', isHttps('http://dummy.com'), '(http://dummy.com)')
  

  // Test is https
  consoleLine()
  console.info('isHttps()\n\nTesting HTTPS (real https and http)\n')
  console.info('should return true:', isHttps(url), `(${url})`)
  console.info('should return false:', isHttps('http://dummy.com'), '(http://dummy.com)')
  
  
  // Test parsedata
  consoleLine()
  console.info('\nTesting parse HTML element RegExp function\nGot: ')
  const matches = greedyFindSingleLineElements(testData, 'inner2')
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


  // Test greedy multiline parse by type
  consoleLine()
  console.info('\nTesting greedy multiline HTML element RegExp parse function (tr element)\n')
  console.info(`Expected:`)
  console.info(trParseOutput())
  console.info("Got:")
  console.log(nonGreedyFindMultiLineElementsByType(testData, 'tr'))


  // Test greedy multiline parse by attribute
  consoleLine()
  console.info('\nTesting multiline HTML element RegExp parse function (div with class end)\n')
  console.info(`Expected:`)
  console.info(classDivEndOuput())
  console.info("Got:")
  console.log(greedyFindMultiLineElementsByAttributeOrText(testData, 'end'))


  // Test combined multiline parse with single line data parse
  consoleLine()
  console.info('\ngreedyFindMultiLineElementsByType() + nonGreedyFindSingleLineElementsInnerText()\n')
  console.info('\nTesting combination of parse methods to get table data')
  console.info('\nCombining greedy multiline parse and non empty singleline text')
  console.info('\nShould return title 1-3 and 9 numbers\n1,2,3,9,7,6,4,5,6')
  const tableHtmlData = greedyFindMultiLineElementsByType(testData, 'table')
  console.log(nonGreedyFindSingleLineElementsInnerText(tableHtmlData, false))
  
}

runAllTests()