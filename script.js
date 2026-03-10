let page = 1

function nextPage(){
document.getElementById("page"+page).classList.remove("active")
page++
document.getElementById("page"+page).classList.add("active")
}

function prevPage(){
document.getElementById("page"+page).classList.remove("active")
page--
document.getElementById("page"+page).classList.add("active")
}

/* MUSIC */

function toggleMusic(){

let music = document.getElementById("bgMusic")

if(music.paused){
music.play()
}else{
music.pause()
}

}


/* SLIDESHOW */

let photos=[
"pic1.jpg",
"pic2.jpg",
"pic3.jpg",
"pic4.jpg",
"pic5.jpg",
"pic6.jpg",
"pic7.jpg",
"pic8.jpg",
"pic9.jpg",
"pic10.jpg"
]

let captions=[
"After four long years, this moment finally became real. What started as a simple memory in 2022 slowly turned into something deeper and more meaningful. So many days passed, so many thoughts stayed unspoken, but somehow our paths found each other again. Holding her hand for the first time as lovers felt different, like everything had finally fallen into place. The wait, the memories, and the small moments all led to this day. From strangers who once just crossed paths to two hearts that now choose each other. Some stories take time, but that's what makes them special. 2025 became the year our story truly began",
"10 November 2022 was just another normal day, or at least it felt like one at first. I didn’t know that one simple moment would stay in my mind for years. When I first saw her, she was just another person in the crowd, but somehow my eyes kept noticing her. There was something about that moment that felt different, even if I didn’t understand it then. I never imagined that the girl I saw that day would one day become someone so important in my life. Life has a funny way of turning small moments into big memories. What looked like a random day actually became the beginning of our story. Sometimes destiny starts quietly, without us realizing it",
"11 November 2022 became another small but funny memory in our story. In that moment she was taking a picture, living her normal day, not knowing that I was actually there behind the scene. I was just standing in the background, watching quietly without realizing how meaningful that moment would become later. Back then it was just a simple coincidence, nothing more. But today when I look at this picture, it feels like destiny was already placing us in the same frame. Life is strange sometimes, the people who start as strangers slowly become the most important part of our lives. What was once just a background moment has now become a special memory. And now that same girl is not just in my life, she is my love",
"Our first meet wasn’t simple, it felt like something straight out of a movie. I still remember sneaking into her college, carefully escaping the security just to see her for a few minutes. My heart was beating fast, half from fear and half from excitement. But the moment I saw her, everything else disappeared. We walked together that evening, talking, laughing, and enjoying every second like the world had paused just for us. That day gave me one of my favorite memories, the small bite mark she left during that meet. It was crazy, risky, and unforgettable at the same time. Looking back now, that moment feels like the true beginning of our story",
"This picture reminds me of the day I traveled nearly 450 kilometers just to see her. I had a semester exam on Monday, but my heart said seeing her was more important than anything else. So on Sunday, I took the journey to Vijayawada without thinking twice. The travel was long and tiring, but the moment I saw her, every kilometer felt worth it. Sometimes love makes you do things that don’t make sense to others. But to me, that one day with her meant everything. Even with an exam waiting the next day, my mind was only happy that I got to see her smile. Some journeys are not about distance, they are about who you travel for",
"This was one of those candid moments that perfectly captured how happy we were together. We were just talking, laughing, and enjoying the little time we had before I had to leave again. Neither of us wanted that moment to end, but time always moves faster when you’re with someone you love. Every joke, every smile, and every second felt special. It was the kind of happiness that comes from simply being together. Even though I knew I would soon have to leave, I tried to hold onto that moment as long as possible. That laughter in this picture is something I’ll always remember. Because sometimes the smallest moments become the most meaningful memories",
"Our third meet in Hyderabad felt like a scene straight out of a movie. Both of our families were there in the same city, which made everything even more risky. We both told small lies at home just to find a way to meet each other secretly. My heart was full of excitement, fear, and happiness all at the same time. But the moment we met, all those worries slowly disappeared. That day also became special because it was the first time we shared our cinema theatre romance. Sitting next to each other, stealing small moments and smiles, felt magical. It was one of those memories that made our bond even stronger. Sometimes love grows the most in those hidden moments",
"This picture reminds me of something very special for her. She always had a small insecurity about wearing a frock, something that made her hesitate for a long time. But slowly, with encouragement and motivation, she decided to try it for the first time. Seeing her walk confidently without fear that day made me so proud of her. She looked beautiful, but more than that, she looked happy and free. It wasn’t just about the dress, it was about her confidence growing. Watching her overcome that insecurity felt like a victory for both of us. That moment showed me how strong she really is. And to me, she looked absolutely perfect",
"After knowing her for four years, this was the first time I saw her wearing a half saree. The moment I saw her, I was completely stunned and speechless. She looked so elegant, cute, and mesmerizing all at the same time. It felt like I was seeing her in a completely new light. Sometimes a single moment can make you fall in love all over again. That day was exactly like that for me. I couldn’t stop looking at her and smiling. She didn’t just look beautiful, she looked unforgettable. It was one of those moments that will stay in my memory forever",
"This picture carries one of the most emotional memories for me. It was our last meet before we had to go our separate ways again for some time. She gave me a letter, something simple but full of her feelings. When I started reading it, my emotions became too heavy to control. Every word in that letter reminded me how much she means to me. I couldn’t stop my tears while reading it. It was a moment filled with love, sadness, and gratitude all at once. Sometimes love is not just about happy moments, it’s also about the tears we share. And that letter will always remain one of my most precious memories"
]

let index=0

function nextPhoto(){
index++
if(index>9) index=0
updatePhoto()
}

function prevPhoto(){
index--
if(index<0) index=9
updatePhoto()
}

function updatePhoto(){

document.getElementById("photo").src=photos[index]
document.getElementById("caption").innerText=captions[index]

}


/* TYPEWRITER */

let text="When I first saw you on November 10, 2022, at your cousin’s wedding reception, it was around 4:10 in the evening. You had just finished your exam and walked into the marriage hall like it was any normal day for you… but for me, that moment quietly changed everything. The hall was full of lights ✨, music 🎶, relatives talking loudly, and people moving everywhere. Yet the second my eyes saw you, the entire world around me felt like it paused for a moment ⏳. I still remember that exact feeling — not dramatic like in movies, but a strange calm shock inside my heart. Something sparked instantly ⚡. Before that day I was honestly the kind of guy who joked around, acted like a Romeo, never taking feelings too seriously. But the moment I saw you, something inside me changed. It was like my heart suddenly decided, “This girl… she is different.” From that day on, without even realizing it, I slowly became a one-girl kind of person ❤️.

Life after that wasn’t simple. For four long years I waited for you, mostly through small conversations, phone calls, messages, and quiet hope. During that time you even had a crush on someone else, and honestly that broke my heart in ways I didn’t even know were possible 💔. There were moments I felt like giving up, moments where I questioned myself, moments where everything felt pointless. But for some reason I couldn’t walk away. I didn’t know why I kept believing in us when there was no clear path, no trust at the beginning, no hope, no light, no guarantee that this story would ever work. Our relationship didn’t start with perfect conditions — it started blindly, with confusion, distance, and uncertainty. Yet somehow I still waited. I stayed. I believed that one day you might see what I felt for you.

And then slowly, little by little, something beautiful happened. You started seeing me differently. You started understanding my heart. And one day you accepted my love — a moment that healed every second of those four years of waiting 🥹✨. That day our story truly began. Now we are not just two people with random memories… we are a couple, two hearts that chose each other despite everything.

Of course our journey hasn’t been easy. When our parents found out, they were scared and worried, and they told us to stop meeting, stop talking, stop loving each other. They wanted us to go separate ways. For a moment it felt like the world was trying to pull us apart 🌧️. But even through all that, one thing stayed strong — our hope. And I want you to remember this always: don’t worry, baby. I am with you. We will go through every problem together. We will fight through every difficult moment side by side. Right now things might feel uncertain, but time has a strange way of fixing what once felt impossible. One day our parents will understand us, one day they will see that our love is real, and one day everything will slowly fall into place 🤍.

Maybe today we are celebrating your birthday through a small surprise on a screen 💻🎁… but in the future it won’t just be this. One day I will be standing right next to you. We will celebrate your birthday together in real life. We will cut the cake 🎂, steal the first bite, laugh until our stomach hurts 😂, and take hundreds of silly photos together 📸. We will make memories that no camera can fully capture. And who knows… maybe our future will be full of our funny little versions too — tiny “chubby cheek” kids running around the house 😌, a cute duck 🦆 like you always wanted, maybe a playful dog 🐶 and a lazy cat 🐱 keeping us company while we live a peaceful, happy life together.

So today, as you step into your 18th year 🎉, remember this: your life is just beginning. New dreams are waiting for you, new adventures are coming, and a beautiful future is slowly being written. No matter how many challenges come our way, I will always stand beside you, choosing you again and again. Because you are not just someone I love — you are the person who changed my heart, my life, and my future 💖.

Happy 18th Birthday, Aarthi 🎂✨. No matter how many years pass, I will always remember the exact moment at 4:10 PM when I first saw you… the moment my world quietly changed forever."

let i=0

function typeWriter(){

if(i<text.length){

document.getElementById("typeText").innerHTML+=text.charAt(i)

i++

setTimeout(typeWriter,40)

}

}

typeWriter()