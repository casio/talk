// var q = require('q');

module.exports = {
  /**
   * Register a command and return a promise for it.
   * @example
   * var talk = require('talk'),
   *     log = function(msgObject) { console.log(arguments) }

   * talk.command('home').then(log)
   * // 'home' -> {command: 'home'}

   * talk.command('go %s').then(log)
   * // 'go home' -> {command: 'go', args: ['home']}
   * // 'go about' -> {command: 'go', args: ['about']}
   *
   * talk.command('select %d').then(log)
   * // 'select 1' -> {command: 'select', args: [1]}
   *
   * talk.command('%d down').then(log)
   * // '1 down' -> {command: 'down', args: [1]}
   * // '1 7 9 down' -> {command: 'down', args: [1, 7, 9]}
   *
   * talk.registerVerb('some')
   * talk.registerVerb('other')
   * talk.registerVerb('other', 'others')
   * talk.command('%(verb)s foo').then(log)
   * // 'some foo' -> {command: 'some', args: ['foo']}
   * // '2 others' -> {command: 'other', args: [2]}
   *
   * @param {string} expr A command expression.
   * @return {Promise} Promise fullfilling once the expression pattern gets matched.
   */
  command: function(expr) {
    return 'promise: ' + expr;
  }
}
