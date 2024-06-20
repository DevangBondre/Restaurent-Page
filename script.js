document.addEventListener("DOMContentLoaded", function() {
    const homeContent = document.querySelector('.homecontent');
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.getAttribute('data-section');
            updateContent(section);
            setActiveButton(button)
        });
    });

    updateContent('home');
    document.querySelector('.nav-btn[data-section="home"]').classList.add('active');

    function updateContent(section) {
        let content = '';

        switch(section) {
            case 'home':
                content = `
                    <h1 class="hungry">Feeling Hungry ?</h1>
                    <div class="homeinfo">    
                        <img src="images/chef.jpg" alt="chef" class="chef">
                    </div>
                    <br>
                    <h3 class="para">Don't worry, we got you! <br> The best snacks await you. <br> Enjoy the best samosas made with love and our authentic recipe and have a blast. <br> Samosas to kachoris, poha to dabeli, nothing will disappoint you and will fill not only your stomach but your soul with delightful taste.</h3>
                `;
                document.querySelector('.homecontent').style.height = "700px";
                document.querySelector('.homecontent').style.width = "800px";
                break;
            case 'menu':
                content = `
                    <h1 class="menu">Our Menu</h1> <br><br>
                    <div class = "container">
                    <div class="menu-item">
                        <img src="images/samosa.jpg" alt="samosa" class="menu-image">
                        <div class="caption">Samosa</div>
                    </div>
                    <div class="menu-item">
                        <img src="images/kachori.jpg" alt="kachori" class="menu-image">
                        <div class="caption">Kachori</div>
                    </div>
                    <div class="menu-item">
                        <img src="images/poha.jpg" alt="poha" class="menu-image">
                        <div class="caption">Poha</div>
                    </div>
                    <div class="menu-item">
                        <img src="images/dabeli.jpg" alt="dabeli" class="menu-image">
                        <div class="caption">Dabeli</div>
                    </div>
                     <div class="menu-item">
                        <img src="images/pakoda.jpg" alt="dabeli" class="menu-image">
                        <div class="caption">Bread Pakoda</div>
                    </div>
                     <div class="menu-item">
                        <img src="images/vada pav.jpg" alt="dabeli" class="menu-image">
                        <div class="caption">Vada Pav</div>
                    </div>
                    </div>
                `;
                document.querySelector('.homecontent').style.height = "950px";
                document.querySelector('.homecontent').style.width = "800px";
                break;
            case 'about':
                content = `
                    <h1 class="aboutus">About Us</h1> <br>
                    <img src="images/tasty.png" alt="tasty" class = "tasty">
                    <p class = aboutusinfo> We are providing quality and tasty food at a very good price since 1956. A genrational bussiness which aims to provide the tastiest snacks possible made with pure love using our ancestral authentic recipes. Come visit us and we promise you will have a great time eating our snacks filling not only your stomach but soul with the great taste which you wont be able to experience anywhere else. Hurry up and have a time of your life ! </p>
                `;
                document.querySelector('.homecontent').style.height = "auto";
                document.querySelector('.homecontent').style.width = "700px";
                break;
            case 'contact':
                content = `
                    <h1 class="contact"><u>Contact Us</u></h1>
                    <h2 class="contactno"> ☏ Call Now: 1234567890 <br><br>
                    Email us: SnackofastDelhi71@gmail.com <br><br>
                    Visit us: 71 Halwa road, Pav bhaji nagar, Delhi </h2>
                `;
                document.querySelector('.homecontent').style.height = "450px";
                document.querySelector('.homecontent').style.width = "600px";
                break;
        }

        homeContent.innerHTML = content;
    }
    function setActiveButton(activebutton){
        buttons.forEach(button =>{
            button.classList.remove('active')
        });
        activebutton.classList.add('active')
    }
    
});

