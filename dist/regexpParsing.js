export default class RegexpParsing {
  regexPattern
  constructor(regexPattern){
    this.regexPattern = regexPattern
  }


  /**
   * A non greedy Multiline parser, does global parsing
   *
   * @param {string} elementToMatch - Gets multi and singleline elements by type.
   * @param {string} dataToParse - Takes string to pars for matches.
   * @return {Array} - Returns an array with all matching patterns.
   */
  nonGreedyFindMultiLineElementsByType = (dataToParse, elementToMatch) => {
    this.regexPattern = `<([${elementToMatch}]+).*?(.*\\n)*?.+?(\\<\\/\\1>[\n ]*)+?`
    return this.findMultilineElementsWithRegexp(dataToParse, this.regexPattern)
  }


  /**
   * A greedy Multiline parser, does global parsing
   *
   * @param {string} elementToMatch - Gets multi and singleline elements by type.
   * @param {string} dataToParse - Takes string to pars for matches.
   * @return {Array} - Returns an array with all matching patterns.
   */
  greedMultiLineElementsByType = (dataToParse, elementToMatch) => {
    this.regexPattern = `<([${elementToMatch}]+).*?(.*\\n)*?.+?(\\<\\/\\1>[\n ]*)+`
    return this.findMultilineElementsWithRegexp(dataToParse, this.regexPattern)
  }


  // move to regexp class.
  /**
   * Internal helper for element type finder.
   *
   * @param {array} dataToParse - Data to parse with regexp
   * @param {*} regexpPattern - Regexp to use for finding element
   * @returns 
   */
  findMultilineElementsWithRegexp = (dataToParse, regexpPattern) => {
    const captureGroup = 1
    const applyPatternGlobaly = 'g'
    const regExp = new RegExp(regexpPattern, applyPatternGlobaly)
    const matchesInPattern = [...dataToParse.matchAll(regExp)]
    return matchesInPattern.map(element => element[captureGroup])
  }

  // Advanced element find by pattern
}