/**
 * This module is helping pick out parts of a webpage for later parsing.
 * It can and probably will have breaking changes early on.
 */

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
    try {
      let responseData = ''
      if (isHttps(url)){
        https.get(url, response => {
          response.on('data', (dataChunk) => responseData += dataChunk)
          response.on('end', () => resolve(responseData))
        })
      } else {
        http.get(url, response => {
          response.on('data', (dataChunk) => responseData += dataChunk)
          response.on('end', () => resolve(responseData))
        })
      }    
    } catch (error) {
      console.error(error)
    }
  })
}

//TODO break out getHtmlBody if possible.



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
  const protocol = url.split(':')[0]
  if (protocol.toLowerCase() === 'https'){
    return true
  }
  return false
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
const parseDataForElements = (dataToParse, elementMatch) => {
  const parsePattern = `<.*${elementMatch}.*>`
  const regExp = new RegExp(parsePattern, 'g')
  const matchesInPattern = [...dataToParse.matchAll(regExp)]
  return matchesInPattern.map(element => element[0])
}


// TODO: Get multiline elements

/**
 * A greedy Multiline parser, does global parsing
 *
 * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
 * @param {string} dataToParse - Takes string to pars for matches.
 * @return {Array} - Returns an array with all matching patterns.
 */
const parseDataForMultiLineElements = (dataToParse, elementMatch) => {
  // <([\w]+).*?temp-high(.*\n)*?.+?(\<\/\1>[\n ]*)+
  const parsePattern = `<([\\w]+).*?${elementMatch}(.*\\n)*?.+?(\\<\\/\\1>[\n ]*)+`
  const regExp = new RegExp(parsePattern, 'g')
  const matchesInPattern = [...dataToParse.matchAll(regExp)]
  return matchesInPattern.map(element => element[0])
}


/**
 * A non greedy element parser, To get text in elements.
 *
 * @param {boolean} getEmpty - True or false to filter out empty spaces. 
 * @param {Array} dataToParse - Takes array to parse, joins array elements with newline
 * @return {Array} - Returns an array with all matching patterns, Non Greedy RegExp.
 */
const parseElementsInnerText = (dataToParse, getEmpty) => {
  const parsePattern = getEmpty ? `>(.*?)<` : `>(.+?)<`
  const joinArrayWith = '\n'
  const captureGroup = 1
  const regExp = new RegExp(parsePattern, 'g')
  const matchesInPattern = [...dataToParse.join(`${joinArrayWith}`).matchAll(regExp)]
  return matchesInPattern.map((element) => {
      return element[`${captureGroup}`]
  })
}


export {getHtmlData, parseDataForElements, parseDataForMultiLineElements, parseElementsInnerText, isHttps, hasCorrectHtmlProtocol}
