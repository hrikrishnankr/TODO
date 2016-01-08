window.onload=function(){
	var addBtnId=document.getElementById('addTodo');
	var todosObj=new Todos();
	addBtnId.addEventListener("click",function(){
		var todoName=document.getElementById('todoName').value;
		var todoId=todosObj.lastId()+1;
		todosObj.setElement(new Todo(todoId,todoName));
	});
};

var Todo=function(id,name){
	this.attr={
				id:id,
				name:name,
				completed:false
			};
	this.changed={
				key:'',
				prevValue:''
	};
};

Todo.prototype.set = function(key, value) {
	if ( this.attr.hasOwnProperty(key) ) {
		this.changed.key = key;
		this.change.prevValue = this.attr[key];

		this.attr[key] = value;
	} else {
		console.warn( 'Trying to set a new property' );
		return false;
	};
};

Todo.prototype.get = function(key) {
	if ( this.attr.hasOwnProperty(key) ) {
		return this.attr[key];
	} else {
		console.warn( 'Cant find ' + key + ' property' );
		return false;
	};
};

var Todos=function(){
	this.todoArray=[];
};

Todos.prototype.getElement=function(){

};

Todos.prototype.setElement=function(x){
	var id=document.getElementById('todoList');
	var newDiv=document.createElement('div');
	var newel1=document.createElement('div');
	var newel2=document.createElement('div');
	var newCheck=document.createElement('input');
	var btn=document.createElement('button');
	newel1.setAttribute("class","spanClass1");
	newel2.setAttribute("class","spanClass2");
	newCheck.setAttribute('type','checkbox');
	btn.setAttribute('class','btnStyle');
	newel1.innerHTML=x.get('id');
	newel2.innerHTML=x.get('name');
	btn.innerHTML="Delete";
	newDiv.appendChild(newCheck);
	newDiv.appendChild(newel1);
	newDiv.appendChild(newel2);
	newDiv.appendChild(btn);
	newDiv.setAttribute('class','divStyle');
	id.appendChild(newDiv);
	this.todoArray.push(x);
};

Todos.prototype.lastId=function(){
	if(_.last(this.todoArray)==undefined)
		return 0;
	else
		return _.last(this.todoArray).get('id');
};
