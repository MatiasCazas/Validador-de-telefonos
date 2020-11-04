const express = require('express');
const app = express();
const validatetelfunction = require("../public/javascripts/validation_function.js");

app.post('/validatetelephone', async function(req, res){
	var resp = await validatetelfunction.validate_telephone(req.body.telephone);
	res.json(resp);
})

module.exports = app;