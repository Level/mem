const level = require("../level-mem-sync.js")
const db = level()

db.put("name", "Level", function(err) {
	console.log("a")
})
console.log("b")
