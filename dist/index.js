/**
 * This module is helping pick out parts of a webpage for later parsing.
 * It can and probably will have breaking changes early on.
 */

import RegexpParsing from './regexpParsing.js'


/**
 * A greedy element parser, does global parsing
 *
 * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
 * @param {string} dataToParse - Takes string to parse for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const greedyFindSingleLineElements = (dataToParse, elementMatch) => {
  const regexpParsing = new RegexpParsing()
  return regexpParsing.greedySingleLineElements(dataToParse, elementMatch)
}


/**
 * A non greedy element parser, To get text in elements.
 *
 * @param {boolean} getEmptySpaces - True or, false to filter out empty spaces. 
 * @param {Array} dataToParse - Takes array to parse, joins array elements with newline
 * @return {Array} - Returns an array with all matching patterns, Non Greedy RegExp.
 */
 const nonGreedyFindSingleLineElementsInnerText = (dataToParse, getEmptySpaces) => {
  const regexpParsing = new RegexpParsing()
  return regexpParsing.nonGreedySingleLineElementsInnerText(dataToParse, getEmptySpaces)
}


/**
 * A greedy Multiline parser, does global parsing
 *
 * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
 * @param {string} dataToParse - Takes string to pars for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const greedyFindMultiLineElementsByAttributeOrText = (dataToParse, textOrAttributeMatch) => {
  const regexpParsing = new RegexpParsing()
  return regexpParsing.greedyMultiLineElementsByAttributeOrText(dataToParse, textOrAttributeMatch)
}


/**
 * A non greedy Multiline parser, does global parsing
 *
 * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
 * @param {string} dataToParse - Takes string to pars for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const nonGreedyFindMultiLineElementsByAttributeOrText = (dataToParse, textOrAttributeMatch) => {
  const regexpParsing = new RegexpParsing()
  return regexpParsing.nonGreedyMultiLineElementsByAttributeOrText(dataToParse, textOrAttributeMatch)
}


/**
 * A non greedy Multiline parser, does global parsing
 *
 * @param {string} elementToMatch - Gets multi and singleline elements by type.
 * @param {string} dataToParse - Takes string to pars for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const nonGreedyFindMultiLineElementsByType = (dataToParse, elementToMatch) => {
  const regexpParsing = new RegexpParsing()
  return regexpParsing.nonGreedyMultiLineElementsByType(dataToParse, elementToMatch)
}


/**
 * A greedy Multiline parser, does global parsing
 *
 * @param {string} elementToMatch - Gets multi and singleline elements by type.
 * @param {string} dataToParse - Takes string to pars for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const greedyFindMultiLineElementsByType = (dataToParse, elementToMatch) => {
  const regexpParsing = new RegexpParsing()
  return regexpParsing.greedyMultiLineElementsByType(dataToParse, elementToMatch)
}

const araryToString = () => {

}

export {araryToString,
        greedyFindSingleLineElements,
        greedyFindMultiLineElementsByAttributeOrText,
        nonGreedyFindMultiLineElementsByAttributeOrText,
        greedyFindMultiLineElementsByType,
        nonGreedyFindMultiLineElementsByType,
        nonGreedyFindSingleLineElementsInnerText
}
