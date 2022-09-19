# Element-scraper
Scrapes elements from a URL
Written in pure JavaScript, and without any extra dependencies.

> **Be aware**: names of methods are probable to change until version 0.1.0

**release notes can be found [here](releasenotes.md)**

### How to install

This module is intended to be used as a helper to fetch elements on a webpage.
It does not handle logins at its current stage.

> npm i element-scraper


### How to use

```js
import {getHtmlData, parseDataForElement, parseElementsInnerText} from 'element-scraper'
```

Alternate methods

```js
import {hasCorrectHtmlProtocol, isHttps, parseElementsInnerText} from 'element-scraper'
```

---

#### Parsing elements


##### parseDataForElement


##### parseElementsInnerText

```js
parseElementsInnerText(dataToParse, getEmpty)
```

Gets all text within >< but not empty spaces (see note) and defaults to **getEmpty** as false / omitted.

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

If you want to have the empty spaces, like above make sure **getEmpty** is set to true

### Note

This is a school project and may or may not be maintained after the course.