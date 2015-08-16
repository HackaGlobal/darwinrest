define({ "api": [  {    "type": "get",    "url": "/board/:crs",    "title": "Request station board data",    "version": "0.0.1",    "name": "GetStationBoard",    "group": "GetStationBoard",    "permission": [      {        "name": "admin"      }    ],    "description": "<p>Retrieve the details for a specific station board given a CRS code.</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": false,            "field": "_crs",            "description": "<p>A CRS short-code of the station. These codes can be found on National Rail Enquiries website.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "apikey",            "description": "<p>The API Key from Darwin OpenLBDWS.</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "arrival",            "description": "<p>The time of arrival.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "departure",            "description": "<p>The time for departure.</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "destination",            "description": "<p>The destination of the service.</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "platform",            "description": "<p>The platform number.</p> "          }        ]      },      "examples": [        {          "title": "Success Response Example:",          "content": "[\n  {\n      \"arrival\": \"19:14\", \n      \"departure\": \"On time\", \n      \"destination\": \"Tring\", \n      \"platform\": \"10\"\n  }, \n  {\n      \"arrival\": \"19:17\", \n      \"departure\": \"On time\", \n      \"destination\": \"Manchester Piccadilly\", \n      \"platform\": null\n  }\n]",          "type": "json"        }      ]    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://api.hacktrain.com/board/EUS?apikey=YOUR-API-KEY",        "type": "json"      }    ],    "sampleRequest": [      {        "url": "http://api.hacktrain.com/board/:crs"      }    ],    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NoApiKey",            "description": "<p>No APIKEY provided.</p> "          }        ]      },      "examples": [        {          "title": "NoApiKey Error Response Example:",          "content": "HTTP/1.1 401 Not Authenticated\n{\n    \"message\": {\n      \"apikey\": \"(Your Darwin API Key)  Missing required parameter in the JSON body or the post body or the query string\"\n    }\n}",          "type": "json"        }      ]    },    "filename": "./app.py",    "groupTitle": "GetStationBoard"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p> "          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./apidoc/main.js",    "group": "_Users_bloomberglondonrd1_IdeaProjects_darwin_darwinrest_apidoc_main_js",    "groupTitle": "_Users_bloomberglondonrd1_IdeaProjects_darwin_darwinrest_apidoc_main_js",    "name": ""  }] });