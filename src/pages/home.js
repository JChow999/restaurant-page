/**
 * Create home page.
 */
function displayHome() {
    const content = document.querySelector('#content')
    const title = document.createElement('h2');
    const para = document.createElement("p");
    const locationTitle = document.createElement('h2');
    const locations = document.createElement("p");
    const googleMap = document.createElement("iframe");

    title.innerText = "Welcome to the world's most exciting cat cafe.";
    para.innerText = "Going to catch the red dot today going to catch the red dot today pretend you want to go out but then don't. Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment cough furball into food bowl then scratch owner for a new one so stares at human while pushing stuff off a table, and sit in a box for hours yet claw at curtains stretch and yawn nibble on tuna ignore human bite human hand hide at bottom of staircase to trip human. Ooh, are those your $250 dollar sandals? lemme use that as my litter box let me in let me out let me in let me out let me in let me out who broke this door anyway found somthing move i bite it tail and plop down in the middle where everybody walks and purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow yet humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean or kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment. Sleep in the bathroom sink lay on arms while you're using the keyboard eat grass, throw it back up. Meow meow, i tell my human stare at the wall, play with food and get confused by dust but meow and rub face on everything white cat sleeps on a black shirt fight an alligator and win. Meow meow, i tell my human meow but poop on floor and watch human clean up but eat the fat cats food pee on walls it smells like breakfast yet lie on your belly and purr when you are asleep. Annoy kitten brother with poking dead stare with ears cocked, why can't i catch that stupid red dot break lamps and curl up into a ball and meow if it fits, i sits mew. Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet kitty power under the bed have secret plans, and check cat door for ambush 10 times before coming in. Stare at wall turn and meow stare at wall some more meow again continue staring i will be pet i will be pet and then i will hiss so eat grass, throw it back up play riveting piece on synthesizer keyboard. "
    
    locationTitle.innerText = "Come visit us!"
    locations.innerText = "We are located at Tokyo tower in Tokyo, Japan!"
    Object.assign(googleMap, {
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477988419487!2d139.7428579759297!3d35.6585848312175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2sTokyo%20Tower!5e0!3m2!1sen!2sca!4v1701290769011!5m2!1sen!2sca",
        // width:"350", 
        // height:"350", 
        allowfullscreen:"", 
        loading:"lazy", 
        referrerpolicy:"no-referrer-when-downgrade"
    })
    

    content.innerHTML = "";
    content.appendChild(title);
    content.appendChild(para);
    content.appendChild(locationTitle);
    content.appendChild(locations);
    content.appendChild(googleMap);
}

export {displayHome}