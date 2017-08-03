var Level = require('../models/level');

var levels = [
    {
      "title": "Basics",
      "description": "In this lesson you will learn about REGEX Basics",
      "picture": "/images/level-placeholder.png",
      "techniques": [
        {
          "meta": "*",
          "description": "Match preceding character 0 or more times"
        },
        {
          "meta": "+",
          "description": "Match preceding character 1 or more times"
        },
        {
          "meta": ".",
          "description": "Match any single character"
        },
        {
          "meta": "x|y",
          "description": "Match either 'x' or 'y'"
        },
        {
          "meta": "\\",
          "description": "Escape a special character"
        },
        {
          "meta": "b",
          "description": "The character b"
        },
        {
          "meta": "abc",
          "description": "The string abc"
        },
        {
          "meta": "g",
          "description": "Global search"
        },
        {
          "meta": "i",
          "description": "Case-insensitive search"
        },
        {
          "meta": "m",
          "description": "Multi-line search"
        },
        {
          "meta": "y",
          "description": "'sticky' search match starting at current position in target string"
        }
      ],
      "opponents": {
        "spar": "Newbie",
        "fight": "Bad Guy"
      },
      "belt": "white"
    },
    {
      "title": "Character Classes",
      "description": "In this lesson you will learn about REGEX Character Classes",
      "picture": "/images/level-placeholder.png",
      "techniques": [
        {
          "meta": "\\d",
          "description": "Match a digit character"
        },
        {
          "meta": "\\D",
          "description": "Match a non-digit character"
        },
        {
          "meta": "\\s",
          "description": "Match a single white space character (space, tab, form feed, or line feed"
        },
        {
          "meta": "\\S",
          "description": "Match a single character other than white space"
        },
        {
          "meta": "\\w",
          "description": "Match any alphanumeric character (including underscore)"
        },
        {
          "meta": "\\W",
          "description": "Match any non-word character "
        },
        {
          "meta": "[abc]",
          "description": "Match any one of the characters in the set 'abc'"
        },
        {
          "meta": "[^abc]",
          "description": "Match anything not in character set 'abc'"
        },
        {
          "meta": "[\\b]",
          "description": "Match a backspace"
        }
      ],
      "opponents": {
        "spar": "Newbie",
        "fight": "Bad Guy"
      },
      "belt": "blue"
    },
    {
      "title": "Assertions",
      "description": "In this lesson you will learn about REGEX Assertions",
      "picture": "/images/level-placeholder.png",
      "techniques": [
        {
          "meta": "^",
          "description": "Match beginning of input"
        },
        {
          "meta": "$",
          "description": "Match end of input"
        },
        {
          "meta": "\\b",
          "description": "Match a word boundary"
        },
        {
          "meta": "\\B",
          "description": "Match a non-word boundary"
        },
        {
          "id": 5,
          "meta": "?=",
          "description": "Lookahead"
        },
        {
          "meta": "?!",
          "description": "Negative lookahead"
        },
        {
          "id": 7,
          "meta": "?<=",
          "description": "Lookbehind"
        },
        {
          "meta": "?<!",
          "description": "Negative lookbehind"
        },
        {
          "meta": "?>",
          "description": "Once-only subexpression"
        },
        {
          "meta": "?()",
          "description": "If then condition"
        },
        {
          "meta": "?()|",
          "description": "If then else condition"
        },
        {
          "meta": "?#",
          "description": "Comment"
        }
      ],
      "opponents": {
        "spar": "Newbie",
        "fight": "Bad Guy"
      },
      "belt": "purple"
    },
    {
      "title": "Quantifiers & Groups",
      "description": "In this lesson you will learn about REGEX Quantifiers and Groups",
      "picture": "/images/level-placeholder.png",
      "techniques": [
        {
          "meta": "{n}",
          "description": "Match exactly n occurrences of preceding character"
        },
        {
          "meta": "{n,m}",
          "description": "Match at least n and at most m occurrences of the preceding character"
        },
        {
          "meta": "?",
          "description": "Match 0 or 1"
        },
        {
          "meta": "(x)",
          "description": "Match 'x' and remember the match"
        },
        {
          "meta": "(?:x)",
          "description": "Match 'x' but do not remember the match"
        },
        {
          "meta": "\\n",
          "description": "A back reference to the last substring matching the n parenthetical in the regex"
        }
      ],
      "opponents": {
        "spar": "Newbie",
        "fight": "Bad Guy"
      },
      "belt": "brown"
    },
    {
      "title": "Special Characters",
      "description": "In this lesson you will learn about REGEX Special Characters",
      "picture": "/images/level-placeholder.png",
      "techniques": [
        {
          "meta": "\\cX",
          "description": "Match control character X in a string"
        },
        {
          "meta": "\\n",
          "description": "Match a line feed"
        },
        {
          "meta": "\\r",
          "description": "Match a carriage return"
        },
        {
          "meta": "\\t",
          "description": "Match a tab"
        },
        {
          "meta": "\\0",
          "description": "Match a NULL"
        },
        {
          "meta": "\\f",
          "description": "Match a form feed"
        },
        {
          "meta": "\\v",
          "description": "Match a vertical tab"
        },
        {
          "meta": "\\xhh",
          "description": "Match character with code hh (2 hex digits)"
        },
        {
          "meta": "\\uhhhh",
          "description": "Match character with code hhhh (4 hex digits)"
        }
      ],
      "opponents": {
        "spar": "Newbie",
        "fight": "Bad Guy"
      },
      "belt": "black"
    }
];

var promises = levels.map(function(level) {
    return (new Level(level)).save();
});

Promise.all(promises);
