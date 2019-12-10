function enableBtns(){
    submit.disabled = false;
    reset.disabled = false;
}
function disableBtns(){
    submit.disabled = true;
    reset.disabled = true;
}
function formSubmitAction(){
    submit.innerHTML = "<i class='sending fas fa-circle-notch'></i> Sending...";
    disableBtns();
    submitted=true;
}
function formSubmissionDone(){
    enableBtns();
    submit.innerHTML = "Send";
    var name = document.getElementsByName("entry.876386890")[0].value;
    reset.click();
    if (submitted){
        msg.innerHTML = "Hi, " + name + ". Your request has been recieved. We will get in touch with you shortly.";
    }
}

var submitted = false;
var msg = document.getElementById("msg");
var actions = document.querySelectorAll("#register .actions button");
var submit = actions[0];
var reset = actions[1];
var form = document.getElementsByTagName("form")[0];
var frame = document.getElementsByTagName("iframe")[0];
frame.setAttribute("onload", "formSubmissionDone();");
