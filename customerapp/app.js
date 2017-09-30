var express =require('express');
var bodyParser=require('body-parser');
var path=require('path');

var app=express();
/*
var logger=function(req,res,next){
console.log('logging');
next();
}

app.use(logger);

*/
//viewer Engine
app.set('view engine','ejs');
app.set('viewes',path.join(__dirname,'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Set Static Path
 app.use(express.static(path.join(__dirname,'public')));

 var users=[
{
	firstName:'jack',
	lastName:'Emers'
}
,{
	firstName:'John',
	lastName:'Stima'
}

 ];

app.get('/',function(req,res){
	res.render('index',{
		title:'customer',
		users:users
	});
}
);

app.set('/users/add',function(req,res)
{
     console.log('in add');
  
	 
}

);
app.listen(3000,function(){
	console.log('server started on port 3000');

})