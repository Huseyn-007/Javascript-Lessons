
// let hasClicked = false;

// $(document).ready(function(){
//     // $("h1").hide();
//     // $("#myBtn").click(function(){
//     //     $("h1").show();

//     // });



//     // $("#myBtn").click(function(){
    

//     //     if(!hasClicked){
//     //         $("h1").hide("1s");
//     //     }
//     //     else{
//     //         $("h1").show("1s");

//     //     }
//     //     hasClicked  = !hasClicked;

//     // });


//     // $(this).dblclick(function(){
//     //     $("p").css("color", "#00bfff");
//     //     $("p").css("font-size", "3em");
//     // })


//     // $('p').mouseenter(function(){
//     //     $(this).css("color", "red");
//     //     $(this).css("transition", "0.5s");

//     // })

//     // $('p').mouseleave(function(){
//     //     $(this).css("color", "green");
//     //     $(this).css("transition", "0.5s");

//     // })


//     $("input").css("outline", "none");


//     $("input").focus(function(){
//         $(this).css("border", "2px solid deepskyblue");
//         $(this).css("transition", "0.5s");
//     })


//     $("input").blur(function(){

//         if($(this).val().trim() === ""){
//             $(this).css("border", "2px solid deepskyblue");
//             $(this).css("transition", "0.5s");
//         }
//         else{
//             $(this).css("border", "2px solid lightgray");
//             $(this).css("transition", "0.5s");
//         }



//     })




    


// });


const namse= ["Revan", "Ruad", "Cavid", "Eli", "Huseyn", "Rubail", "Mehemmed", "Elmira", "Vuqar", "Semaye", "Ilkin", "Ulvi"];


let content = '';

for (let i = 0; i < names.length; i++) {
    const n = names[i];
    content +=`
        <div>
            <h1>${n}</h1>
        </div>
    `;
    
}

$(document).ready(function(){


    // $('#mydiv').html(content);


    // alert($("#mydiv").attr("id"));



    $("button").click(function(){

        $("#mydiv").html();
    })

})