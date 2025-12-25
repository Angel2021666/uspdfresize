function process(){
  if(!document.getElementById("file").files[0]){
    alert("File select karo");
    return;
  }
  alert("Demo version: resize + watermark logic");
}
