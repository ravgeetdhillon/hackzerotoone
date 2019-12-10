function displayMembers(id){
    var i, members = document.querySelectorAll(".hidden-div");
    var total = id.value;
    if (total > id.max || total < id.min || isNaN(total) || total == ""){
        for (i = 0; i < members.length; i++){
            members[i].style.display = "none";
            members[i].required = false;
        }
    }
    else{
        for (i = 0; i < total - 1; i++){
            members[i].style.display = "flex";
            members[i].required = true;
        }
    }
}