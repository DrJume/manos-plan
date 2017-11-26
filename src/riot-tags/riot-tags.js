riot.tag2('day-lessons', '<h1 class="c-heading u-super">Unterrichtsstunden</h1>', '', '', function(opts) {
});
riot.tag2('todo', '<h3>{opts.title}</h3> <ul> <li each="{item, i in items}">{item}</li> </ul> <form onsubmit="{add}"> <input ref="input"> <button>Add #{items.length + 1}</button> </form>', 'todo h3,[data-is="todo"] h3{font-size:14px}', '', function(opts) {
    this.items = []

    this.add = function(e) {
      e.preventDefault()
      var input = this.refs.input
      this.items.push(input.value)
      input.value = ''
    }.bind(this)
});