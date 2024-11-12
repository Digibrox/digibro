
  const fullscreenButton = document.getElementById('fullscreenButton');
const fullscreenOpenIcon = document.getElementById('fullscreenOpen');
const fullscreenExitIcon = document.getElementById('fullscreenExit');

fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Tam ekran moduna geç
        document.documentElement.requestFullscreen();
        fullscreenOpenIcon.style.display = 'none'; // Açık simgeyi gizle
        fullscreenExitIcon.style.display = 'inline'; // Çıkış simgesini göster
    } else {
        // Tam ekran modundan çık
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        fullscreenOpenIcon.style.display = 'inline'; // Açık simgeyi göster
        fullscreenExitIcon.style.display = 'none'; // Çıkış simgesini gizle
    }
});

let clickCountFullScreen = 0; // Tıklama sayısı

fullscreenButton.addEventListener('click', () => {
    clickCountFullScreen++; 

    
    if (clickCountFullScreen % 2 === 1) { 
        fullscreenButton.style.backgroundColor = "#fff"
    } else { 
        fullscreenButton.style.backgroundColor = "#fff"
    }

    if (clickCountFullScreen === 6) { 
        clickCountFullScreen = 0;
    }
});


//////////////

const notificationBell = document.getElementById('notificationBell');
const notificationMainDiv = document.getElementById('notificationMainDiv');


let clickCountNotification = 0; // Tıklama sayısı

notificationBell.addEventListener('click', () => {
  clickCountNotification++; 

    
    if (clickCountNotification % 2 === 1) { 
      notificationBell.style.backgroundColor = "#f5f5f5"
      notificationMainDiv.style.display = 'block';
    } else { 
      notificationBell.style.backgroundColor = "#fff"
      notificationMainDiv.style.display = 'none';
    }

    if (clickCountNotification === 6) { 
      clickCountNotification = 0;
    }
});
function toggleDropdown() {
  document.querySelector('.sidebar-profile').classList.toggle('show');
}