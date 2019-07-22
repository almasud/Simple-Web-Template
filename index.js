// code for registration form
function registrationValidation() {
  var form = document.getElementById("register_form");
  var fname = form.elements.namedItem("fname").value;
  var email = form.elements.namedItem("email").value;
  var password = form.elements.namedItem("password").value;
  var repassword = form.elements.namedItem("repassword").value;
  var gender = form.elements.namedItem("gender");
  var country = form.elements.namedItem("country");
  var degree = form.elements.namedItem("degree");
  var errMsg = document.getElementById("errmsg");

  if (fname == "") {
    errMsg.innerHTML = "Name is required!";
    scrollToElement(errMsg);
    return false;
  }
  if (email == "") {
    errMsg.innerHTML = "Email is required!";
    scrollToElement(errMsg);
    return false;
  }
  if (password == "") {
    errMsg.innerHTML = "Password is required!";
    scrollToElement(errMsg);
    return false;
  }
  if (repassword == "") {
    errMsg.innerHTML = "Enter password again!";
    scrollToElement(errMsg);
    return false;
  }
  if (password != "" && repassword != "" && password !== repassword) {
    errMsg.innerHTML = "Password doesn't match!";
    scrollToElement(errMsg);
    return false;
  }
  if (gender.length > 0) {
    var flag = false;
    for (i = 0; i < gender.length; i++) {
      if (gender[i].checked) flag = true;
    }
    if (!flag) {
      errMsg.innerHTML = "Select your gender";
      scrollToElement(errMsg);
      return flag;
    }
  }
  if (!country.value) {
    errMsg.innerHTML = "Select your country";
    scrollToElement(errMsg);
    return false;
  }
  if (degree.length > 0) {
    var flag = false;
    for (i = 0; i < degree.length; i++) {
      if (degree[i].checked) flag = true;
    }
    if (!flag) {
      errMsg.innerHTML = "Select at least one degree";
      scrollToElement(errMsg);
      return flag;
    }
  }
}

// Scroll to a target element
function scrollToElement(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Code for video page
function selectVideo(element, video) {
  document.getElementById("video_source").src = "media/videos/" + video;
  document.getElementById("video").load();
  document.getElementById("video").play();

  for (i = 0; i < getSiblings(element).length; i++) {
    getSiblings(element)[i].removeAttribute("class", "li_active");
  }
  element.setAttribute("class", "li_active");
}

// Code for audio page
function selectAudio(element, audio) {
  document.getElementById("audio_source").src = "media/audios/" + audio;
  document.getElementById("audio").load();
  document.getElementById("audio").play();

  for (i = 0; i < getSiblings(element).length; i++) {
    getSiblings(element)[i].removeAttribute("class", "li_active");
  }
  element.setAttribute("class", "li_active");
}

/**
 * Get siblings of an element
 * @param  {Element} elem
 * @return {Object}
 */
var getSiblings = function(elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for (; sibling; sibling = sibling.nextSibling)
    if (sibling.nodeType == 1 && sibling != elem) siblings.push(sibling);
  return siblings;
};
