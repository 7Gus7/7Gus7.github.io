// Texts for each bubble
const bubbleContents  = {
    1: [
        "<p>Some cool images. Click to explore!</p>",
        "<p>Here's one of <em>pirates!</em> Yarr...</p>", 
        '<img src="https://assets.mobilebaymag.com/uploads/2017/05/Cascabel20Ashore456.jpg" alt="pirate">',
        "<p>Oh wow, what about <em>outer space</em> now?</p>",
        '<img src="https://science.nasa.gov/wp-content/uploads/2023/04/potw1346a-jpg.webp?w=1536&format=webp" alt="quasar">'
    ],
    2: [
        "<p>I really enjoy the <strong>Frutiger Aero</strong> theme. It feels like a comfortable future I'd like to have.</p>",
        "<p>I realize the website is supposed to feel more like the 90s, but this definitely seeps into the early 2000's</p>",
        "<p>I'd love to hear your feedback!</p>",
        '<a href="info.html">Read more about me?</a>'
    ],
    3: [
        "<p>Here's some enjoyable websites I like to visit!</p>",
        '<a href="https://horsle.glitch.me/" target="_blank">Horsle</a>',
        '<a href="https://play.typeracer.com/" target="_blank">Typeracer</a>',
        '<a href="https://www.coolmathgames.com/" target="_blank">CoolMathGames</a>'
    ],
    4: [
        "<p>Get ready for a cool embedded youtube vid...</p>",
        "<p>Click one more time...</p>",
        '<button onclick="alert(\'Try typing the word disco\')">Random button distraction!</button>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/J---aiyznGQ?si=peFnBiSXBxEL1LFz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    ],
    5: [
        '<p>Here is my generative artwork! Click to open them.</p>',
        `<div class="bubble bubble-art bubble-black" onclick="changeText(this, -1)" style="top: 500px; left: 10%; width: 500px; height: 500px;">
            <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG51.png" alt="Bubble Art 1">
            <a href="sketch1.html" target="_blank" style="position: relative; transform: translateX(-190px);">Screensaver</a>
        </div>`,
        `<div class="bubble bubble-art bubble-black" onclick="changeText(this, -2)" style="top: 500px; left: 30%; width: 500px; height: 500px;">
            <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG51.png" alt="Bubble Art 2">
            <a href="sketch2.html" target="_blank" style="position: relative; transform: translateX(-190px);">Vaporwave</a>
        </div>`,
        `<div class="bubble bubble-art bubble-black" onclick="changeText(this, -3)" style="top: 500px; left: 50%; width: 500px; height: 500px;">
            <img src="https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG51.png" alt="Bubble Art 3">
            <a href="sketch3.html" target="_blank" style="position: relative; transform: translateX(-190px);">Technomixer</a>
        </div>`
    ]
};

// Cycle through texts
function changeText(bubble, bubbleNumber) {
    if (bubbleNumber < 0) {
        let smallIndex = bubbleNumber * -1;
        const contents = bubbleContents[5];

        const contentDiv = document.getElementById('bubble-main');
        contentDiv.innerHTML = contents[smallIndex-1];

    } else {
        const contentDiv = bubble.querySelector('.bubble-content');
        const currentContent = contentDiv.innerHTML;
        const contents = bubbleContents[bubbleNumber];
        
        // Find the index of the current content
        let currentIndex = contents.indexOf(currentContent);

        // If currentContent is not found, set currentIndex to -1
        if (currentIndex === -1) {
            currentIndex = -1;
        }
        
        // Calculate the next index, making sure to loop back to the start
        let nextContentIndex = (currentIndex + 1) % contents.length;

        // Update the bubble content
        contentDiv.innerHTML = contents[nextContentIndex];
    }
}


// Variable to hold the music
let discoMusic;
let normMusic;

// Secret disco easter egg
document.addEventListener('DOMContentLoaded', () => {
    let keySequence = [];
    const discoSequence = 'disco'; // The secret word to trigger the event

    document.addEventListener('keydown', (event) => {
        keySequence.push(event.key.toLowerCase()); // Store each key press

        // Limit the stored sequence to the length of the secret word
        if (keySequence.length > discoSequence.length) {
            keySequence.shift(); // Remove the oldest key if sequence is too long
        }

        // Check if the current sequence matches the secret word
        if (keySequence.join('') === discoSequence) {
            activateDiscoMode();
        }
    });
});

function activateDiscoMode() {
    // Play disco music
    if (!discoMusic) {
        discoMusic = new Audio('https://vgmtreasurechest.com/soundtracks/disco-cannon-airlines-2022/slcruxnenp/01.%20DiscoTrack.mp3');
    }
    if (normMusic) {
        normMusic.pause();
        normMusic.currentTime = 0; // Reset the music to the beginning
    }
    discoMusic.play();

    // Optionally, add more effects like changing colors, animations, etc.
    document.body.style.background = 'url(\'https://static.vecteezy.com/system/resources/thumbnails/008/860/524/original/shiny-disco-ball-celebration-decoration-artistic-background-loop-free-video.jpg\')'; // Change background to black

    // Optionally, add more effects like changing colors, animations, etc.
    document.querySelector('.tv-text h1').innerText = 'Disco Time!';
    document.querySelector('.tv-text h2').innerText = 'Let\'s Dance!';

    // Change bubble image
    const bubbles = document.querySelectorAll('.bubble img');
    bubbles.forEach(bubble => {
        bubble.src = "https://cdn.pixabay.com/photo/2021/11/10/07/23/disco-6783171_1280.png";
    });

    // Remove the effect after some time
    setTimeout(() => {

        document.querySelector('.tv-text h1').innerText = 'Welcome to My 90s Website';
        document.querySelector('.tv-text h2').innerText = 'Frutiger Aero themed!';

        // Stop the music
        if (discoMusic) {
            discoMusic.pause();
            discoMusic.currentTime = 0; // Reset the music to the beginning
        }
        if (!normMusic) {
            normMusic = new Audio('https://vgmtreasurechest.com/soundtracks/plants-vs.-zombies/wntaobbsor/07.%20Zen%20Garden.mp3');
            normMusic.loop = true; // Enable looping
        }
        normMusic.play();

        bubbles.forEach(bubble => {
            bubble.src = "https://pngimg.com/uploads/soap_bubbles/soap_bubbles_PNG51.png";
        });
        document.body.style.background = ''; // Reset background

    }, 10000); // Duration of 10 seconds
}