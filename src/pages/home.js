
function displayHome() {
    const content = document.querySelector('#content')
    const para = document.createElement("p");
    const locations = document.createElement("p");
    const googleMap = document.createElement("iframe");

    para.textContent = "Hello"
    
    locations.textContent = "We have locations at"
    Object.assign(googleMap, {
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477988419487!2d139.7428579759297!3d35.6585848312175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2sTokyo%20Tower!5e0!3m2!1sen!2sca!4v1701290769011!5m2!1sen!2sca",
        width:"600", 
        height:"450", 
        style:"border:0;", 
        allowfullscreen:"", 
        loading:"lazy", 
        referrerpolicy:"no-referrer-when-downgrade"
    })
    

    content.appendChild(para);
    content.appendChild(locations);
    content.appendChild(googleMap);
    console.log("Hello");
}

export {displayHome}