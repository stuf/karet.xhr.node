const XHR = require('karet.xhr');
const K = require('kefir');

const url = 'https://jsonplaceholder.typicode.com/todos';

const json = XHR.getJson(url);

json.log('json');
