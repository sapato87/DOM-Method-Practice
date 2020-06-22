
let bodyElement = document.querySelector ("body")



// Button element
let btnElement = document.createElement ('button')
btnElement.id ='btn'
btnElement.append ('click me')
btnElement.style.width = "65px"
btnElement.style.height= "45px"
bodyElement.appendChild(btnElement)
console.log(btnElement);

// Main element
let mainElement = document.createElement ('main')
bodyElement.appendChild(mainElement)
console.log(mainElement);

// <IMG> element
let imgElement=document.createElement('img')
imgElement.src="https://lh5.googleusercontent.com/proxy/ueiyXRRdwILe7QTlX63Rpakipom-ZzlqZ5BiYPhg1JT-MlyqQgBLxRednyUd8XkdPA6lLAwAn5HOdox2Egr2a1GSTGU3mlt96illkrdK0MeVXbewEdGmHRSlazCAOLhJsaqtZkbpaCElOvIxhZ08VkBFzpdUae0xIXqrqKzM9ZvD=w426-h238-k-no"
imgElement.className='image'
console.log(imgElement);

mainElement.appendChild(imgElement)

// <A> element
let aElement = document.createElement('a')
aElement.append ("Learn more about trips to Freetown on google travel")
aElement.href = 'https://www.google.com/travel/guide?sxsrf=ALeKk00hlbEeUDoHx7SmtREZQxHUhoQDxw:1592832976156&source=hp&ei=0LPwXrLRBoyWsAWrj4GwAQ&q=sierra+leone+tourism&oq=Sierra+Leone+tou&gs_lcp=CgZwc3ktYWIQARgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECCMQJzoFCAAQkQI6BQgAELEDOgQIABBDOgoIABCxAxAUEIcCOggIABCxAxCRAjoFCAAQgwE6BwgAELEDEEM6BwgAEBQQhwI6CggAEIMBEBQQhwI6BggAEBYQHlCzFlj5XGDShQFoAXAAeACAAYgBiAGXDpIBBDQuMTOYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&dest_src=o&dest_mid=/m/0fnc_&sa=X&ved=2ahUKEwjq3ZymxZXqAhUHbKwKHXYrAYYQ69EBKAEwAHoECBkQBA#dest_mid=/m/0fnc_&dest_src=o&tcfs=Ei4KCC9tLzBmbmNfEghGcmVldG93bhoYCgoyMDIwLTA3LTA4EgoyMDIwLTA3LTEy'
Element.className ="link"
mainElement.appendChild(aElement)
console.log(aElement);

// add eventlistener to remove main element
document.getElementById('btn').addEventListener("click", function()
{
mainElement.remove()
})