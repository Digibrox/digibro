document
  .getElementById("sidebar-icon-notifications")
  .addEventListener("click", function () {
    var sidebarNotifications = document.getElementById("sidebar-notifications");
    var sidebarMessages = document.getElementById("sidebar-messages");
    var sidebarSettings = document.getElementById("sidebar-settings");

    if (sidebarNotifications.style.display === "block") {
      sidebarNotifications.style.display = "none";
      sidebarMessages.style.display = "none";
      sidebarSettings.style.display = "none";
    } else {
      sidebarNotifications.style.display = "block";
      sidebarMessages.style.display = "none";
      sidebarSettings.style.display = "none";
    }
  });
document
  .getElementById("sidebar-icon-messages")
  .addEventListener("click", function () {
    var sidebarNotifications = document.getElementById("sidebar-notifications");
    var sidebarMessages = document.getElementById("sidebar-messages");
    var sidebarSettings = document.getElementById("sidebar-settings");

    if (sidebarMessages.style.display === "block") {
      sidebarMessages.style.display = "none";
      sidebarSettings.style.display = "none";

      sidebarNotifications.style.display = "none";
    } else {
      sidebarMessages.style.display = "block";
      sidebarNotifications.style.display = "none";
      sidebarSettings.style.display = "none";
    }
  });
document
  .getElementById("sidebar-icon-settings")
  .addEventListener("click", function () {
    var sidebarNotifications = document.getElementById("sidebar-notifications");
    var sidebarMessages = document.getElementById("sidebar-messages");
    var sidebarSettings = document.getElementById("sidebar-settings");
    if (sidebarSettings.style.display === "block") {
      sidebarMessages.style.display = "none";
      sidebarSettings.style.display = "none";
      sidebarNotifications.style.display = "none";
    } else {
      sidebarSettings.style.display = "block";
      sidebarNotifications.style.display = "none";
      sidebarMessages.style.display = "none";
    }
  });


  gsap.registerPlugin(MorphSVGPlugin);

document.querySelectorAll('.button').forEach(element => {

  let path = element.querySelector('.btn-layer path'),
      tl = gsap.timeline();

  element.addEventListener('click', e => {
    e.preventDefault()
    if(element.classList.contains('active')) {
      return
    }
    element.classList.add('active')

    tl.to(path, {
      morphSVG: 'M136,77.5h-1H4.8H4c-2.2,0-4-1.8-4-4v-47c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0C44,22.5,66,10,66,10  s3,12.5,69.1,12.5c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47C140,75.7,138.2,77.5,136,77.5z', 
      duration: .3,
      delay: .3
    }).to(path, {
      morphSVG: 'M136,77.5c0,0-11.7,0-12,0c-90,0-94.2,0-94.2,0s-10.8,0-25.1,0c-0.2,0-0.8,0-0.8,0c-2.2,0-4-1.8-4-4v-47  c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0c39.1,0,61.1,0,61.1,0s3,0,69.1,0c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47  C140,75.7,138.2,77.5,136,77.5z', 
      duration: 1.7, 
      ease: 'elastic.out(1, .15)',
      onComplete() {
        element.classList.remove('active')
      }
    })
  })
})