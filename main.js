student_array=[];
function submit(){
    // var name_1= document.getElementById("student_1").value;
    // var name_2= document.getElementById("student_2").value;
    // var name_3= document.getElementById("student_3").value;
    // var name_4= document.getElementById("student_4").value;
    var display_student_array=[];
    for(var j=1; j<=4; j++){
        var student_name=document.getElementById("student_name_"+j).value;
        console.log(student_name);
        student_array.push(student_name)
    }
    console.log(student_array);

    var length_student_array=student_array.length;
     console.log(length_student_array);

   for(var k=0; k<length_student_array; k++){
       display_student_array.push("<h4> Name - "+student_array[k]+"</h4>");
       console.log(display_student_array)
   }
   console.log(display_student_array);
   document.getElementById("display_name_with_comas").innerHTML=display_student_array;

   var remove_comas=display_student_array.join(" ");
   console.log(remove_comas);
   document.getElementById("display_name_without_comas").innerHTML=remove_comas;
   
    // document.getElementById("display_name").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    student_array.sort();
    console.log(student_array);

    var student_array_sorting=[]
    var length_student_array=student_array.length;
    console.log(length_student_array);
    for(var k=0; k<length_student_array; k++){
        student_array_sorting.push("<h4> Name - "+student_array[k]+"</h4>");
        console.log(student_array_sorting);
    }
    var remove_comas=student_array_sorting.join(" ");
    console.log(remove_comas)
    document.getElementById("display_name_without_comas").innerHTML=remove_comas;
}
function new_update(){
    document.getElementById("display_name_without_comas").innerHTML="<h1>"+student_array+"</h1>";
}