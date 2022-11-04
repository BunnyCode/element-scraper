# Element-scraper
Scrapes elements from a URL
Written in pure JavaScript, and without any extra dependencies.

### What it does

The package is able to take specific part of a webpage and capture the text or containing elements.
This is done with RegEx. If you want to grab the values of a table, it's possible to select the class or part of text in that element and get all the innerHTML out.
It's also possible to get several elements of the same type as an array output.

### What needs to be added.

Adding functionality to get larger elements where we have a div containing other div elements.
This is currently not possible, since greedy regex is not suited for HTML.
Due to its way of finding the last possible, setting it as an end point will become the last div on the page.

Read more here: https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags
The third and fourth post explains the issue well.


> **Be aware**: Data fetching removed in version > 0.2.0 (to accommodate web compatibility, npm install)

**release notes can be found [here](https://github.com/BunnyCode/element-scraper/blob/main/releasenotes.md)**

### How to install

This module is intended to be used as a helper to fetch elements on a webpage.
It does not handle logins at its current stage.

> npm i element-scraper


### Examples

1. Use a tool like axios to fetch data, from: 'https://bunnycode.github.io/element-scraper/'

Presume we have the data in a variable named "data"

```js
console.log(nonGreedyFindMultiLineElementsByType(data, 'tr'))
```

should give us the result

```console
[
  '<tr>\n' +
    '          <td>Title1</td>\n' +
    '          <td>Title2</td>\n' +
    '          <td>Title3</td>\n' +
    '        </tr>\n' +
    '      ',
  '<tr>\n' +
    '          <td>1</td>\n' +
    '          <td>2</td>\n' +
    '          <td>3</td>\n' +
    '        </tr>\n' +
    '        ',
  '<tr>\n' +
    '          <td>9</td>\n' +
    '          <td>7</td>\n' +
    '          <td>6</td>\n' +
    '        </tr>\n' +
    '        ',
  '<tr>\n' +
    '          <td>4</td>\n' +
    '          <td>5</td>\n' +
    '          <td>6</td>\n' +
    '        </tr>\n'
]
```

### How to use

```js
import {parseDataForElement, parseElementsInnerText} from 'element-scraper'
```

Alternate methods

```js
import {parseDataForMultiLineElements} from 'element-scraper'
```


#### All available Parsing methods
* greedyFindSingleLineElements
* greedyFindMultiLineElementsByAttributeOrText
* nonGreedyFindMultiLineElementsByAttributeOrText *
* greedyFindMultiLineElementsByType
* nonGreedyFindMultiLineElementsByType
* nonGreedyFindSingleLineElementsInnerText

> All parsing methods follow the schema of (dataToParse, "What you are looking for")
except for **nonGreedySingleLineElementsInnerText(dataToParse, boolean: getEmptySpaces)**
See example further down this page.

---

### Getting Data

### Parsing elements

Once you have the data string, you can check start parsing out the elements you would like to get.


#### parseDataForElement

```js
greedyFindSingleLineElements(dataToParse, elementMatch)
```

You pass your data string as __dataToParse__. To find a specific class name or element ID pass this as __elementMatch__.


#### parseElementsInnerText

```js
nonGreedyFindSingleLineElementsInnerText(dataToParse, getEmptySpaces)
```

Gets all text within >< but not empty spaces (see note) and defaults to **getEmptySpaces** as false / omitted.

> Note: the empty array data from this function comes from the emptiness in
\</innerElement\>\</outerElement\> in an element like this.\<outerElement\>Some text\<innerElement\>Some more text\</innerElement\>\</outerElement\>

```console
[
  ' 15°', '15°', 'max',  '',    ' 15°', '15°',
  'max',  '',    ' 14°', '14°', 'max',  '',
  ' 14°', '14°', 'max',  '',    ' 14°', '14°',
  'max',  '',    ' 15°', '15°', 'max',  '',
  ' 15°', '15°', 'max',  '',    ' 15°', '15°',
  'max',  '',    ' 14°', '14°', 'max',  '',
  ' 14°', '14°', 'max',  '',    ' 14°', '14°',
  'max',  '',    ' 14°', '14°', 'max',  '',
  ' 14°', '14°', 'max',  '',    ' 13°', '13°',
  'max',  ''
]
```

If you want to have the empty spaces, like above make sure **getEmptySpaces** is set to true


#### nonGreedyFindMultiLineElementsByType or greedyFindMultiLineElementsByType

```js
nonGreedyFindMultiLineElementsByType(dataToParse, elementMatch)
```

```js
greedyFindMultiLineElementsByType(dataToParse, elementMatch)
```

To get a multi-line element you use __nonGreedyFindMultiLineElementsByType__
The difference is that the non-greedy version will break after the first </> of that element, while the greedy will look for the last possible closing tag, of the same element
it looks for the opening and closing tag.
You pass your data string as __dataToParse__. To find a specific class name or element ID pass this as __elementMatch__. 

#### greedyFindMultiLineElementsByAttributeOrText or nonGreedy

The same idea applies here, to break early or not

```js
greedyFindMultiLineElementsByAttributeOrText(dataToParse, textOrAttributeMatch)
```
```js
nonGreedyFindMultiLineElementsByAttributeOrText(dataToParse, textOrAttributeMatch)
```

This will allow you to get elements with attributes like class name or text strings.

### Participate in this module

If you want to participate in this module, feel free to do pull requests towards the main branch.
I will review them when time allows. Please make sure your commit message is clear on what it is trying to solve or add.
If there are issues with how the module works, create and issue, with an example for me to review. 

### Note

This is a school project and may or may not be maintained after the course.