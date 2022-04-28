module.exports = {
  apps : [{
    name   : "app1",
    script : "./index.js",
    watch: '.',
    ignore_watch: ["/logs","/node_modules"]
  }]
}
