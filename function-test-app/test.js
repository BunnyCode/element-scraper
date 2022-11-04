import {greedyFindSingleLineElements,
        nonGreedyFindSingleLineElementsInnerText,
        greedyFindMultiLineElementsByAttributeOrText,
        nonGreedyFindMultiLineElementsByAttributeOrText,
        nonGreedyFindMultiLineElementsByType,
        greedyFindMultiLineElementsByType,

      } from '../dist/index.js'

import {
  trParseOutput,
  classDivEndOuput,
  tableOuptut,
  greedyPOutput,
  nonGreedyPOutput
} from './testExpectedOutput.js'


const url = 'https://bunnycode.github.io/element-scraper/'
const incorrectUrl = 'ftp://bunnycode.github.io/element-scraper/'

const consoleLine = () => {
  console.info("\n================\n")
}

const runAllTests = async () => {
  console.info('========================================')
  console.info("Running all tests for defined functions:\n========================================\n")


  
  
  // Test parsedata
  consoleLine()
  console.info('\n**greedyFindSingleLineElements()**\n')
  console.info('\nTesting parse HTML element RegExp function\nGot: ')
  const matches = greedyFindSingleLineElements(testData, 'inner2')
  console.log(matches)
  console.log("\nExpected:\n[ \"<div id='inner2' class='di2'>This is inner 2</div></div>\" ]")
  

  // Test inner text parse
  consoleLine()
  console.info('\n**nonGreedyFindSingleLineElementsInnerText()**\n')
  console.info('\nTesting parse inner HTML element RegExp function\n')
  let innerMatches = nonGreedyFindSingleLineElementsInnerText(matches, true)
  console.info("Should contain empty slots in array")
  console.log(innerMatches)
  innerMatches = nonGreedyFindSingleLineElementsInnerText(matches)
  console.info("Should NOT contain empty slots in array")
  console.log(innerMatches)


  // Test greedy multiline parse by type
  consoleLine()
  console.info('\n**nonGreedyFindMultiLineElementsByType()**\n')
  console.info('\nTesting greedy multiline HTML element RegExp parse function (tr element)\n')
  console.info(`Expected:`)
  console.info(trParseOutput())
  console.info("Got:")
  console.log(nonGreedyFindMultiLineElementsByType(testData, 'tr'))


  // Test greedy multiline parse by attribute
  consoleLine()
  console.info('\n**greedyFindMultiLineElementsByAttributeOrText()**\n')
  console.info('\nTesting multiline HTML element RegExp parse function (div with class end)\n')
  console.info(`Expected:`)
  console.info(classDivEndOuput())
  console.info("Got:")
  console.log(greedyFindMultiLineElementsByAttributeOrText(testData, 'end'))


  // Test greedy multiline parse by text
  consoleLine()
  console.info('\n**greedyFindMultiLineElementsByAttributeOrText()**\n')
  console.info('\nTesting greedy multiline RegExp parse function (p element containing "Last")\n')
  console.info(`Expected:`)
  console.info(greedyPOutput())
  console.info("Got:")
  console.log(greedyFindMultiLineElementsByAttributeOrText(testData, 'Last'))


  // Test nongreedy multiline parse by text
  consoleLine()
  console.info('\n**nonGreedyFindMultiLineElementsByAttributeOrText()**\n')
  console.info('\nTesting non greedy multiline RegExp parse function (p element containing "Last")\n')
  console.info(`Expected:`)
  console.info(nonGreedyPOutput())
  console.info("Got:")
  console.log(nonGreedyFindMultiLineElementsByAttributeOrText(testData, 'Last'))


  // Test combined multiline parse with single line data parse
  consoleLine()
  console.info('\n**greedyFindMultiLineElementsByType() + nonGreedyFindSingleLineElementsInnerText()**\n')
  console.info('\nTesting combination of parse methods to get table data')
  console.info('\nCombining greedy multiline parse and non empty singleline text')
  console.info('\nExpected: ')
  console.info(tableOuptut())
  console.info('\nGot: ')
  const tableHtmlData = greedyFindMultiLineElementsByType(testData, 'table')
  console.log(nonGreedyFindSingleLineElementsInnerText(tableHtmlData, false))
  
}

runAllTests()