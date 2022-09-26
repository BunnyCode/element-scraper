========================================
Running all tests for defined functions:
========================================


================


**hasCorrectHtmlProtocol()**

Testing if URL starts with HTTP

should return false: false ftp://bunnycode.github.io/element-scraper/
should return true: true https://bunnycode.github.io/element-scraper/

================


Testing protocol FTP agains isHttps

should return false: false ftp://bunnycode.github.io/element-scraper/

================

**isHttps()**

Testing HTTP (!isHttps and isHttps)

should return true: true (http://dummy.com)
should return false: false (http://dummy.com)

================

**isHttps()**

Testing HTTPS (actual https and http)

should return true: true (https://bunnycode.github.io/element-scraper/)
should return false: false (http://dummy.com)

================


**greedyFindSingleLineElements()**


Testing parse HTML element RegExp function
Got: 
[ "<div id='inner2' class='di2'>This is inner 2</div></div>" ]

Expected:
[ "<div id='inner2' class='di2'>This is inner 2</div></div>" ]

================


**nonGreedyFindSingleLineElementsInnerText()**


Testing parse inner HTML element RegExp function

Should contain empty slots in array
[ 'This is inner 2', '' ]
Should NOT contain empty slots in array
[ 'This is inner 2' ]

================


**nonGreedyFindMultiLineElementsByType()**


Testing greedy multiline HTML element RegExp parse function (tr element)

Expected:
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
Got:
```console
[
  '<tr>\n' +
    '          <td>Title1</td>\n' +
    '          <td>Title2</td>\n' +
    '          <td>Title3</td>\n' +
    '        </tr>\n',
  '<tr>\n' +
    '          <td>1</td>\n' +
    '          <td>2</td>\n' +
    '          <td>3</td>\n' +
    '        </tr>\n',
  '<tr>\n' +
    '          <td>9</td>\n' +
    '          <td>7</td>\n' +
    '          <td>6</td>\n' +
    '        </tr>\n',
  '<tr>\n' +
    '          <td>4</td>\n' +
    '          <td>5</td>\n' +
    '          <td>6</td>\n' +
    '        </tr>\n'
]
```

================


**greedyFindMultiLineElementsByAttributeOrText()**


Testing multiline HTML element RegExp parse function (div with class end)

Expected:
```console
[
  '<div class="end">\n' +
    '    <p>Last div</p>\n' +
    '    <strong class="strength">Is here\n' +
    '\n' +
    '    </strong></div>\n'
]
```
Got:
```console
[
  '<div class="end">\n' +
    '    <p>Last div</p>\n' +
    '    <strong class="strength">Is here\n' +
    '\n' +
    '    </strong></div>\n'
]
```

================


**greedyFindMultiLineElementsByAttributeOrText()**


Testing greedy multiline RegExp parse function (p element containing "Last")

Expected:
```console
[
  '<p>Last div</p>\n' +
    '    <strong class="strength">Is here\n' +
    '\n' +
    '    </strong></div>\n' +
    '    <p>This page is intentionally boring and strangely formed to test the app.</p>\n'
]
```
Got:
```console
[
  '<p>Last div</p>\n' +
    '    <strong class="strength">Is here\n' +
    '\n' +
    '    </strong></div>\n' +
    '    <p>This page is intentionally boring and strangely formed to test the app.</p>\n'
]
```

================


**nonGreedyFindMultiLineElementsByAttributeOrText()**


Testing non-greedy multiline RegExp parse function (p element containing "Last")

Expected:
```console
[ '<p>Last div</p>\n' ]
```
Got:
```console
[ '<p>Last div</p>\n' ]
```

================


**greedyFindMultiLineElementsByType() + nonGreedyFindSingleLineElementsInnerText()**


Testing combination of parse methods to get table data

Combining greedy multiline parse and non empty singleline text

Expected:
```console
[
  'Title1', 'Title2',
  'Title3', '1',
  '2',      '3',
  '9',      '7',
  '6',      '4',
  '5',      '6'
]
```

Got: 
```console
[
  'Title1', 'Title2',
  'Title3', '1',
  '2',      '3',
  '9',      '7',
  '6',      '4',
  '5',      '6'
]
```