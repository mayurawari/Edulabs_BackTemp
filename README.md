# Edulabs_BackTemp

//API Steps to follow

//To register new user 
//Format to be followed
Method: post;
req.body:{
  "username":"test",
  "email":"test@gmail.com",
  "password":"123123"
}
response:"User Successfully registred"

//To login new user 
//Format to be followed
Method: post;
req.body:{
  "username":"test",
  "password":"123123"
}
response:"user logedin succesfully"

Note:please provide token generated in console to the authorization header before hitting protected routes or to logout user.

//To logout user 
//Format to be followed
Method: post;
("Provide token in authorization header)
response:"Logged out successfully"


//To add task
//Format to be followed
Method: post;
req.body:{
  "title":"task-1",
  "status":"completed",
  "priority":"low",
  "assigneduser":"employee"
}
response:"new Task created"

//To get alltask
Method:get;
Endpoint/url: (http://localhost:9090/api-gettask/alltasks)
response: "all tasks will appear as response"

//To get filteredltask
Method:get;
Endpoint/url: (http://localhost:9090/api-gettask/alltasks)
response: "all filtered tasks will appear as response"

//to delete task
Method:delete
Endpoint/url:(http://localhost:9090/api-gettask/deletetask/:id)
response: "task deleted"


//to update task
method:patch;
Enpoint/url:(http://localhost:9090/api-gettask//updatetask/:id)
//Update the field in req.body 
//Format to be followed
req.body:{
  "title":"task-1",
  "status":"completed",
  "priority":"low",
  "assigneduser":"employee"
}

response: "updated task will appear as response"