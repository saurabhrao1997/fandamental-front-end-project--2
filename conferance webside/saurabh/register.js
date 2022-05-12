const name1 = document.getElementById("name")
const email = document.getElementById("email")
const no_of_person = document.getElementById("noOfperson")
const comment = document.getElementById("comment")
const button = document.getElementById("button2")


button.onclick =function(){
    localStorage.setItem("name",name1.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("no_of_person",no_of_person.value);
    localStorage.setItem("comment",comment.value);
   

    alert(`hii ${name1.value}, your registration successfully 
    done and your conferance pass will be send you ${email.value} on this email. 
    thank you  `)
}


