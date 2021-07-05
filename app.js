let form = document.getElementById('form');
let table = document.getElementById('table');

function Student(name,course,grad,status){

  this.name=name;
  this.course=course;
  this.grad=grad;
  this.status=status;
  Student.all.push(this);
}
Student.all=[];

function getData(e){
  e.preventDefault();
  let name= e.target.name.value;
  let course=e.target.course.value;
  let grad= getRandomInt(35,100);
  let status=stat(grad);

  new Student(name ,course ,grad ,status);
  localStorage.setItem('student',JSON.stringify(Student.all));

  let tr=document.createElement('tr');
  table.appendChild(tr);
  let td1 =document.createElement('td')
  tr.appendChild(td1);
  td1.textContent=name;

  let td2 =document.createElement('td')
  tr.appendChild(td2);
  td2.textContent=course;

  let td3 =document.createElement('td')
  tr.appendChild(td3);
  td3.textContent=grad;

  let td4 =document.createElement('td')
  tr.appendChild(td4);
  td4.textContent=status;

}
form.addEventListener('submit',getData);

function render(){
  let data=JSON.parse(localStorage.getItem('student'));
  if(data){
    Student.all=data;
    for (let i = 0; i < data.length; i++) {

      let tr=document.createElement('tr');
      table.appendChild(tr);
      let td1 =document.createElement('td')
      tr.appendChild(td1);
      td1.textContent=data[i].name;

      let td2 =document.createElement('td')
      tr.appendChild(td2);
      td2.textContent=data[i].course;

      let td3 =document.createElement('td')
      tr.appendChild(td3);
      td3.textContent=data[i].grad;

      let td4 =document.createElement('td')
      tr.appendChild(td4);
      td4.textContent=data[i].status;
      
    }
  }
}
render();

function stat(grad){
  if(grad>=50){
    return 'pass';
  }else{return 'fail';
}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}