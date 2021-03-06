module.exports = function container (get, set, clear) {
  return function forget (id) {
    var command = get('commands.forget')
    get('run_states').destroy(id, function (err, destroyed) {
      if (err) throw err
      get('logger').info('[' + command.name + ']'.yellow + ' forgot '.grey + id.cyan, destroyed, {public: false})
      get('app').close(function (err) {
        if (err) throw err
        process.exit()
      })
    })
  }
}