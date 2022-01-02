/**

    Project 3
    Name: Evan Hogarth
    Date: December 31, 2021
    Description: The final project for Web Dev 1.
      A custom portfolio site with 3 pages with a common nav, header, and footer.
      Contact page with working form validation.

**/

document.addEventListener("DOMContentLoaded", load);

function load() {
  document.getElementsByClassName("arrow")[0].addEventListener("click", scrollTrigger);

  // Tests if the website is on the contact page.
  // Because this assignment only wanted 1 javascript page, I need to only run
  // the form event listeners while on the contact page to prevent error on other pages.
  let path = window.location.pathname;
  let page = path.substring(path.lastIndexOf('/') + 1);
  if(page == "contact.html"){
    document.getElementById("contact").addEventListener("submit", validate);
  }
}

// Used for the arrow at bottom of some pages.
// If clicked will smooth scroll to next section.
function scrollTrigger() {
  let viewHeight = window.innerHeight;
  window.scrollBy({
    top: viewHeight,
    left: 0,
    behavior: 'smooth'
  });
}


function validate(e){
	hideAllErrors();

	if(formHasErrors()){
		e.preventDefault();

		return false;
	}

	return true;
}


function formHasErrors(){

	let errorFlag = false;

  // name verification - any strings with only letters are valid.
  let nameRegex = new RegExp(/^[a-zA-Z ]+$/);
  let inputName = document.getElementById("name").value;

  if(!nameRegex.test(inputName)){
    document.getElementsByClassName("contact-error")[0].style.display = "block";

    if(!errorFlag){
      document.getElementById("name").focus();
      document.getElementById("name").select();
    }

    errorFlag = true;
  }

  // phone verification regex - various different phone formats accepted
  let phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
  let inputPhone = document.getElementById("phone").value;

  if(!phoneRegex.test(inputPhone)){
    document.getElementsByClassName("contact-error")[1].style.display = "block";

    if(!errorFlag){
      document.getElementById("phone").focus();
      document.getElementById("phone").select();
    }

    errorFlag = true;
  }

  // email verification - simple verification allowing format string@string.string
  let regex = new RegExp(/\S+@\S+\.\S+/);
  let inputEmail = document.getElementById("email").value;

  if(!regex.test(inputEmail)){
    document.getElementsByClassName("contact-error")[2].style.display = "block";

    if(!errorFlag){
      document.getElementById("email").focus();
      document.getElementById("email").select();
    }

    errorFlag = true;
  }

	return errorFlag;
}

function hideAllErrors()
{
	let errorFields = document.getElementsByClassName("contact-error");

	for(let i = 0;i < errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
}
