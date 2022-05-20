
function display() {
    var userhallno = document.getElementById("input2").value;

    pattren = "\[0-9]";

    if (userhallno.match(pattren)) {
        switch(userhallno){
            case '200141191':
                //alert("Your noor");
               
                window.location.href="stuStatus.html";
                document.getElementById('name').value="Noor Mohammad";
            break;
            case '200141192':
                alert("Your bharat");
            break;
            case '200141193':
                alert("Your basavaraju");
            break;
            case '200141194':
                alert("Your vamshi");
            break;
            case '200141195':
                alert("Your gowtham");
            break;
            default:
                alert("Your number is not avilable in this List sorry!!!!!. Please enter your .no within 191 to 195");
       }
    } else {
        alert("Please Enter Hall ticket.no number")

    }
}

function callme(){
   
}



/*

function display(){
    window.location.href="stuStatus.html";
    document.getElementById("name").value="Noor Mohammad";
}
*/