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


/**
 * A non greedy element parser, To get text in elements.
 * Will get all elemnts if elementMatch is ommited ( .* ). can be used with regex strings like \s \w and so on.
 * Only returns non empty elements.
 *
 * @param {string} elementMatch - Part of an element that you want to get, RegExp or text. If omitted will return all text.
 * @param {Array} dataToParse - Takes array to parse.
 * @return {Array} - Returns an array with all matching patterns.
 */
const parseElementsInnerText = (dataToParse, elementMatch) => {
  const captureGroup = elementMatch ? elementMatch : '.*'
  const parsePattern = `>.*?(${captureGroup}?).*?<`
  const regExp = new RegExp(parsePattern, 'g')
  const matchesInPattern = [...dataToParse.join().matchAll(regExp)]
  return matchesInPattern.map((element) => {
      return element[1]
  })
}



export {getHtmlData, parseDataForElements, parseElementsInnerText, isHttps}
