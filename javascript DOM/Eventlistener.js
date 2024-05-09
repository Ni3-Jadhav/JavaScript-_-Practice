document.getElementById('rel1').addEventListener('keyup',removeEventListener1);
function removeEventListener1(){
    document.getElementById('rel').innerHTML=document.getElementById('rel1').value;

} 
  document.getElementById('rel2').addEventListener('click',removeEventListener2);
function removeEventListener2(){
    document.getElementById('rel1').removeEventListener('keyup',removeEventListener1);
}
// here ,we use 'removeeventlistener' . in this we remove an event in runtime, but the event in 'hard code' 
// not remove ,runtime add event is only remove by this