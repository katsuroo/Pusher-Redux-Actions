'use strict';

var Pusher = require('pusher-js');
var pusherRedux = require('./pusher-redux');
pusherRedux.setPusherClient(Pusher);
module.exports = pusherRedux;