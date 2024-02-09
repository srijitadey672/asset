// var calculate = document.getElementById('calculate'),
//     calculateAge = document.getElementById('calculateAge');
//
// calculate.addEventListener('click',function(){
//     var birthDate = document.getElementById('birth_date').value;
//     birthDate = new Date(birthDate);
//     todayDate = new Date()
//     totalAge = Date.now() - birthDate.getTime();
//     ageYear = new Date(totalAge);
//     ageYear = Math.abs(ageYear.getUTCFullYear() - 1970 );
//
//     function ageMonth() {
//         if(todayDate.getMonth() >= birthDate.getMonth()) {
//             if(todayDate.getDate() >= birthDate.getDate()) {
//                 return todayDate.getMonth() - birthDate.getMonth();
//             }
//             else {
//                 if((todayDate.getMonth() - 1) >= birthDate.getMonth()) {
//                     return (todayDate.getMonth() - 1) - birthDate.getMonth();
//                 }
//                 else {
//                     return ((todayDate.getMonth() - 1) + 12) - birthDate.getMonth();
//                 }
//             }
//         }
//
//     };
//     function ageDay() {
//         if(todayDate.getDate() > birthDate.getDate()) {
//             return todayDate.getDate() - birthDate.getDate();
//         }
//         else if(todayDate.getDate() == birthDate.getDate()) {
//             return todayDate.getDate() - birthDate.getDate();
//         }
//         else {
//             let calDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), 0);
//             return (todayDate.getDate() + calDate.getDate()) - birthDate.getDate();
//         }
//     };
//     calculateAge.innerHTML = "Your Age "+ageYear+" Years "+ageMonth()+ " Months "+ageDay()+" Days"
//
// });
// function calculateAge() {
//     var dob = document.getElementById('dob').value;
//     var today = new Date();
//     var birthDate = new Date(dob);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var month = today.getMonth() - birthDate.getMonth();
//     if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     document.getElementById('result').innerHTML = "You are " + age + " years old.";
// }
function calculateAge() {
    var dob = document.getElementById('dob').value;
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('result').innerHTML = "You are " + age + " years old.";
}

window.onload = function() {
    var text = document.getElementById('typing-text').innerHTML;
    document.getElementById('typing-text').innerHTML = '';
    var i = 0;
    var speed = 100; // typing speed in milliseconds

    function typeWriter() {
        if (i < text.length) {
            document.getElementById('typing-text').innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
};
