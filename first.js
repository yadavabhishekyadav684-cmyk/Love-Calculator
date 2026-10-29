const form = document.querySelector('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const Boy = document.getElementById("Boy");
    const Girl = document.getElementById("Girl");
    // boy and girl ko id ke through select karne ke baad 
    // ab boy ki value ko lena padega and uske length ko calculate kerna padega 
    const l1 = Boy.value.length;
    const l2 = Girl.value.length;
    // actual logic:
    // We are taking length of boy name & length of girl name
    // adding both and take cube of added length 
    // then taking mod(%) with 101 to get value in between (0-100)%
    const result =Math.pow(l1+l2,3)%101;
    document.querySelector('h2').textContent=`Result : ${result}`;

})