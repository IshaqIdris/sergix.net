/*jslint node:true*/
import * as util from './util'
import * as loader from './loader'

if (module.hot) {
  module.hot.accept()
}

/* sass */
import 'bootstrap/scss/bootstrap.scss'
util.requireAll(require.context('../sass', true, /^(?!_).+.sass$/))

/* js */
util.requireAll(require.context('.', true, /\.js$/))

// begin the initial page loading
$(() => {
  loader.setEventHandlers()
  loader.load()
})