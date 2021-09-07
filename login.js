function btnclick() {
  // alert("working");
  let mail = document.getElementById("mailid").value;
  let pass = document.getElementById("pwd").value;
  if (mail == "" && pass == "") {
    alert("enter the mail and pass...");
  } else if (mail == "") {
    alert("enter the mail id...");
  } else if (pass == "") {
    alert("enter the password...");
  }
}
