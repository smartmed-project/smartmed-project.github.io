function operateRadioButton(clickedID){
  var hideElems = document.getElementsByClassName('all-items');
  for (var i=0;i<hideElems.length;i+=1){
    hideElems[i].style.display = 'none';
  }
  var showElems = document.getElementsByClassName(clickedID);
  for (var i=0;i<showElems.length;i+=1){
    showElems[i].style.display = 'block';
  }
}