var count = 0;
var mybannerimages = ['https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Feb/Unrec-PC-3000._CB583548448_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/febatf24/unrec/hsbc/pc-3._CB583592019_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Dec23/Shoes/EOSS/Unrec/citi/Sports/3000._CB584596853_.jpg'];
function myslider() {
    document.getElementById('images').src = mybannerimages[count];
    console.log(count)
    if (count == mybannerimages.length - 1) {
        count = 0;
    } else {
        count++;
    }

}
let mysliderfunction = setInterval(myslider, 4000);
myslider();
function moveNext() {
    console.log(count)
    clearInterval(mysliderfunction);
    document.getElementById('images').src = mybannerimages[count];
    if (count == mybannerimages.length - 1) {
        count = 0;
    } else {
        count++;
    }

}
function movePrevious() {
    console.log(count)
    clearInterval(mysliderfunction);
    document.getElementById('images').src = mybannerimages[count];
    if (count == 0) {
        count = 2;
    } else {
        count--;
    }
}
function continueshow() {

    myslider();
}