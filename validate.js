function validationProcess() {
  if(validation()) {
    document.getElementById("form_id").action = "validated.html";
    document.getElementById("form_id").submit();
  }
}

function validation() {
    var pass = document.getElementById('pswd').value;
    var truePass = "240320";
    if(pass == truePass) {
      return true;
    }
}
