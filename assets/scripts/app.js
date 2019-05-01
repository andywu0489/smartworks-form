'use strict'
const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#cancel').on('click', events.onCancel)
  $('#save').on('click', events.save)
  $('#next').on('click', events.next)
})
