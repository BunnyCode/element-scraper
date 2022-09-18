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


// EXPORTED FUNCTIONS

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
 * 
 * @param {string} url 
 */
const getHtmlData = async(url) => {
  const htmlBody = await getHtmlBody(url)
  return htmlBody
}

/**
 * Non Greedy element parser, does global parsing
 *
 * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
 * @param {*} dataToParse
 * @return {Array} - Returns an array with all matching patterns.
 */
const parseDataForElement = (elementMatch, dataToParse) => {
  const matchesInPattern = []
  const parsePattern = `<.*${elementMatch}.*?>`
  const regExp = new RegExp(parsePattern, 'g')
  console.log(regExp.exec(dataToParse)[0])
}


export {getHtmlData, parseDataForElement, isHttps}
