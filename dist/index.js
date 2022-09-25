/**
 * This module is helping pick out parts of a webpage for later parsing.
 * It can and probably will have breaking changes early on.
 */

import http from 'http'
import https from 'https'
import HttpCall from './httpCall.js'
import RegexpParsing from './regexpParsing.js'
import regexpParsing from './regexpParsing.js'




/**
 * Returns promise, resulting in a string, will take HTTP or HTTPS url's.
 *
 * @param {string} url - URL to get body from.
 * @returns Promise - when resolved this is a string.
 */
const getHtmlBody = async (url) => {
  const httpCall = new HttpCall(url) 
  return await httpCall.getRawHtml()
}

/**
 * Makes sure the string starts with http or https
 *
 * @param {string} url - Takes a URL as a string to try and check if it starts with http:// or https://
 * @returns - Boolean True or false.
 */
const hasCorrectHtmlProtocol = (url) => {
  const protocol = url.split('://')[0].toLowerCase()
  if (protocol === 'http' || protocol === 'https'){
    return true
  }
  return false
}


/**
 * Checks of URL string starts with https.
 *
 * @param {string} url - Takes a URL as a string to try and check if it starts with https
 * @returns - Boolean True or false.
 */
const isHttps = (url) => {
  const httpCall = new HttpCall(url)
  return httpCall.isHttps() 
}


/**
 * returns source HTML from URL as a string
 *
 * @param {string} url - Takes a URL as string
 * @returns {string} - Returns HTML page as a string
 */
const getHtmlData = async(url) => {
  const htmlBody = await getHtmlBody(url)
  return htmlBody
}


/**
 * A greedy element parser, does global parsing
 *
 * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
 * @param {string} dataToParse - Takes string to pars for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const getDataForElements = (dataToParse, elementMatch) => {
  const parsePattern = `<.*${elementMatch}.*>`
  const regExp = new RegExp(parsePattern, 'g')
  const matchesInPattern = [...dataToParse.matchAll(regExp)]
  return matchesInPattern.map(element => element[0])
}


/**
 * A greedy Multiline parser, does global parsing
 *
 * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
 * @param {string} dataToParse - Takes string to pars for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const greedyFindMultiLineElementsByAttributeOrText = (dataToParse, textOrAttributeMatch) => {
  // <([\w]+).*?temp-high(.*\n)*?.+?(\<\/\1>[\n ]*)+
  const getElementStartAndEndByAttributeOrText = `<([\\w]+).*?${textOrAttributeMatch}(.*\\n)*?.+?(\\<\\/\\1>[\n ]*)+`
  const regExp = new RegExp(getElementStartAndEndByAttributeOrText, 'g')
  const matchesInPattern = [...dataToParse.matchAll(regExp)]
  return matchesInPattern.map(element => element[0])
}


/**
 * A non greedy Multiline parser, does global parsing
 *
 * @param {string} elementToMatch - Gets multi and singleline elements by type.
 * @param {string} dataToParse - Takes string to pars for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const nonGreedyMultiLineElementsByType = (dataToParse, elementToMatch) => {
  const regexpParsing = new RegexpParsing()
  return regexpParsing.nonGreedyFindMultiLineElementsByType(dataToParse, elementToMatch)
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


// move to regexp class.
/**
 * Internal helper for element type finder.
 *
 * @param {array} dataToParse - Data to parse with regexp
 * @param {*} regexpPattern - Regexp to use for finding element
 * @returns 
 */
const findMultilineElementsWithRegexp = (dataToParse, regexpPattern) => {
  const captureGroup = 1
  const applyPatternGlobaly = 'g'
  const regExp = new RegExp(regexpPattern, applyPatternGlobaly)
  const matchesInPattern = [...dataToParse.matchAll(regExp)]
  return matchesInPattern.map(element => element[captureGroup])
}

/**
 * A non greedy element parser, To get text in elements.
 *
 * @param {boolean} getEmpty - True or, false to filter out empty spaces. 
 * @param {Array} dataToParse - Takes array to parse, joins array elements with newline
 * @return {Array} - Returns an array with all matching patterns, Non Greedy RegExp.
 */
const nonGreedyFindSingleLineElementsInnerText = (dataToParse, getEmpty) => {
  const findEmpty = getEmpty ? `>(.*?)<` : `>(.+?)<`
  const joinArrayWith = '\n'
  const captureGroup = 1
  const applyPatternGlobaly = 'g'
  const regExp = new RegExp(findEmpty, applyPatternGlobaly)
  const matchesInPattern = [...dataToParse.join(`${joinArrayWith}`).matchAll(regExp)]
  return matchesInPattern.map((element) => {
      return element[captureGroup]
  })
}


export {getHtmlData,
        getDataForElements,
        greedyFindMultiLineElementsByAttributeOrText,
        greedyFindMultiLineElementsByType,
        nonGreedyMultiLineElementsByType,
        nonGreedyFindSingleLineElementsInnerText,
        findMultilineElementsWithRegexp,
        isHttps,
        hasCorrectHtmlProtocol}
