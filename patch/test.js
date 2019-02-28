const level = require("../level-mem.js")
const db = level()

db.put("name", "Level", function(err) {
	console.log("a")
})
console.log("b")
