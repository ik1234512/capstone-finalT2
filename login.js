var objPeople = [
	{ 
		username: "ishaan",
		password: "1234567"
	},
	{ 
		username: "ram",
		password: "1234567"
	},
	{ 
		username: "prograd",
		password: "junior"
    },
    {
        username: "yeet",
        password: "1234567"
    }

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].username && password == objPeople[i].password) {
      
			console.log(username + " is logged in!!!")
			
			return
		}
  }
  alert('incorrect userid/password')
	console.log("incorrect username or password")
}