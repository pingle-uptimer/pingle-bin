{

  "host": "0.0.0.0",
  "port": 6969,

  "keyLength": 10,

  "maxLength": 10000000,

  "staticMaxAge": 2592000000,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    
  "path": "./data",
  "type": "file"

  },

  "documents": {
    "about": "./about.md"
  }

}
