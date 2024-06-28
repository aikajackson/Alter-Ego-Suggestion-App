let passionate = document.querySelector(".real-estate-agent");
let clever = document.querySelector(".villain");
let creative = document.querySelector(".rapper");
let brave = document.querySelector(".plumber");
let reliable = document.querySelector(".surgeon");
passionate.style.display = "none";
clever.style.display = "none";
creative.style.display = "none";
brave.style.display = "none";
reliable.style.display = "none";
let purple = document.querySelector(".pop");
let red = document.querySelector(".rock");
let black = document.querySelector (".hip-hop");
let white = document.querySelector (".classical");
let orange = document.querySelector (".country");
purple.style.display="none";
red.style.display = "none";
black.style.display = "none";
white.style.display = "none";
orange.style.display = "none";
let a = document.querySelector(".smell");
let b = document.querySelector(".walk");
let c = document.querySelector(".talk");
let d = document.querySelector(".secrets");
let e = document.querySelector(".dip");
a.style.display="none";
b.style.display="none";
c.style.display="none";
d.style.display="none";
e.style.display="none";
let sweet = document.querySelector(".nerds");
let sour = document.querySelector(".skittles");
let salty = document.querySelector(".chips");
let umami = document.querySelector(".squid");
let spicy = document.querySelector(".takis");
sweet.style.display="none";
sour.style.display="none";
salty.style.display="none";
umami.style.display="none";
spicy.style.display="none";
let one = document.querySelector(".eat");
let two = document.querySelector(".turn");
let three = document.querySelector(".outrun");
let four = document.querySelector(".cry");
let five = document.querySelector(".attract");
one.style.display="none";
two.style.display="none";
three.style.display="none";
four.style.display="none";
five.style.display="none";

let buttonOne = document.querySelector(".button-one");
let imageCareer = document.querySelector(".image-career");


buttonOne.addEventListener("click", function(){
    let adjectiveInput = document.querySelector(".adjective-input").value;
        if (adjectiveInput==="passionate"){
        imageCareer.src = "https://www.mashvisor.com/blog/wp-content/uploads/2020/06/10-Benefits-of-Hiring-a-Real-Estate-Agent.jpg";
        imageCareer.style.width = "300px";
        imageCareer.style.height = "200px";
        passionate.style.display = "block";
        clever.style.display = "none";
        creative.style.display = "none";
        brave.style.display = "none";
        reliable.style.display = "none";
        }
        else if (adjectiveInput==="clever"){
        imageCareer.src = "https://t3.ftcdn.net/jpg/04/66/39/10/360_F_466391068_Gh3du960FKmzUemPEI9zPwKpNcc0fGRN.jpg";
        imageCareer.style.width = "300px";
        imageCareer.style.height = "200px";
        clever.style.display = "block";
        passionate.style.display = "none";
        creative.style.display = "none";
        brave.style.display = "none";
        reliable.style.display = "none";
        }
        else if (adjectiveInput==="creative"){
        imageCareer.src = "https://upload.wikimedia.org/wikipedia/commons/9/93/Future_-_Openair_Frauenfeld_2019_01_%28cropped%29.jpg";
        imageCareer.style.width = "250px";
        imageCareer.style.height ="300px";
        creative.style.display = "block";
        passionate.style.display = "none";
        clever.style.display = "none";
        brave.style.display = "none";
        reliable.style.display = "none";
        }
        else if (adjectiveInput==="brave"){
        imageCareer.src = "https://www.insideadvisorpro.com/wp-content/uploads/2022/10/IAP_Blog_WomenPlumber_Increasing-Representation-for-Women.jpg";
        imageCareer.style.width = "375px";
        imageCareer.style.height = "200px";
        brave.style.display = "block";
        passionate.style.display = "none";
        clever.style.display = "none";
        creative.style.display = "none";
        reliable.style.display = "none";
        }
        else if (adjectiveInput==="reliable"){
        imageCareer.src = "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/image1-49.jpg";
        imageCareer.style.width = "350px";
        imageCareer.style.height = "200px";
        reliable.style.display = "block";
        passionate.style.display = "none";
        clever.style.display = "none";
        creative.style.display = "none";
        brave.style.display = "none";
        }
    });

let buttonTwo = document.querySelector(".button-two");
let imageMusic = document.querySelector(".image-music");

buttonTwo.addEventListener("click", function(){
    let colorInput = document.querySelector(".color-input").value;
        if (colorInput==="purple"){
            imageMusic.src = "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-06/240613-liverpool-taylor-swift-concert-ac-748p-d56f1d.jpg";
            imageMusic.style.width = "300px";
            imageMusic.style.height = "200px";
            purple.style.display="block";
            red.style.display = "none";
            black.style.display = "none";
            white.style.display = "none";
            orange.style.display = "none";
        }
        else if (colorInput==="red"){
            imageMusic.src = "https://express-images.franklymedia.com/6616/sites/356/2020/07/13101800/GettyImages-26365921.jpg";
            imageMusic.style.width = "300px";
            imageMusic.style.height = "200px";
            purple.style.display="none";
            red.style.display = "block";
            black.style.display = "none";
            white.style.display = "none";
            orange.style.display = "none";
        }
        else if (colorInput==="black"){
            imageMusic.src = "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-10/drake-zz-231006-0296d9.jpg";
            imageMusic.style.width = "275px";
            imageMusic.style.height = "200px";
            purple.style.display="none";
            red.style.display = "none";
            black.style.display = "block";
            white.style.display = "none";
            orange.style.display = "none";
        }
        else if (colorInput==="white"){
            imageMusic.src = "https://www.mediastorehouse.com/p/731/ai-image-portrait-mozart-playing-piano-1780s-36368069.jpg.webp";
            imageMusic.style.width = "275px";
            imageMusic.style.height = "300px";
            purple.style.display="none";
            red.style.display = "none";
            black.style.display = "none";
            white.style.display = "block";
            orange.style.display = "none";
        }
        else if (colorInput==="orange"){
            imageMusic.src = "https://music-row-website-assets.s3.amazonaws.com/wp-content/uploads/2022/12/06210204/CVPMW-14-scaled-e1669913014742.jpg";
            imageMusic.style.width = "300px";
            imageMusic.style.height = "275px";
            purple.style.display="none";
            red.style.display = "none";
            black.style.display = "none";
            white.style.display = "none";
            orange.style.display = "block";
        }
    });
    
let buttonThree = document.querySelector(".button-three");
let imageHabits = document.querySelector(".image-habits");

buttonThree.addEventListener("click", function (){
    let letterInput = document.querySelector(".letter-input").value;
        if (letterInput==="a"){
            imageHabits.src = "https://i5.walmartimages.ca/images/Enlarge/739/467/6000203739467.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF";
            imageHabits.style.width = "275px";
            imageHabits.style.height = "300px";
            a.style.display="block";
            b.style.display="none";
            c.style.display="none";
            d.style.display="none";
            e.style.display="none";
        }
        else if (letterInput==="b"){
            imageHabits.src = "https://cdn-prod.medicalnewstoday.com/content/images/articles/326/326648/senior-and-carer-walking-slowly.jpg";
            imageHabits.style.width = "300px";
            imageHabits.style.height = "200px";
            a.style.display="none";
            b.style.display="block";
            c.style.display="none";
            d.style.display="none";
            e.style.display="none";
        }
        else if (letterInput==="c"){
            imageHabits.src = "https://i.guim.co.uk/img/media/d0c44736240b6cd230c31074c1057251c26015c8/0_279_6300_3780/master/6300.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e069ff5d8f8f8b4a74aa07ffbbc3e6cb";
            imageHabits.style.width = "300px";
            imageHabits.style.height = "225px";
            a.style.display="none";
            b.style.display="none";
            c.style.display="block";
            d.style.display="none";
            e.style.display="none";
        }
        else if (letterInput==="d"){
            imageHabits.src = "https://www.psychologs.com/wp-content/uploads/2024/02/the-psychology-behind-keeping-secrets.jpg";
            imageHabits.style.width = "300px";
            imageHabits.style.height = "175px";
            a.style.display="none";
            b.style.display="none";
            c.style.display="none";
            d.style.display="block";
            e.style.display="none";
        }
        else if (letterInput==="e"){
            imageHabits.src = "https://images.radio.com/aiu-media/Fries775x515-bc2650f1-f3d0-4d70-a9cf-783164da284e.jpg";
            imageHabits.style.width = "300px";
            imageHabits.style.height = "200px";
            a.style.display="none";
            b.style.display="none";
            c.style.display="none";
            d.style.display="none";
            e.style.display="block";
        }
    });

let buttonFour = document.querySelector(".button-four");
let imageSnacks = document.querySelector(".image-snacks");

buttonFour.addEventListener("click", function (){
    let flavorInput = document.querySelector(".flavor-input").value;
        if (flavorInput==="sweet"){
            imageSnacks.src = "https://target.scene7.com/is/image/Target/GUEST_fd0a4629-7807-44be-b782-6328cba9175f?wid=488&hei=488&fmt=pjpeg";
            imageSnacks.style.width = "275px";
            imageSnacks.style.height = "295px";
            sweet.style.display="block";
            sour.style.display="none";
            salty.style.display="none";
            umami.style.display="none";
            spicy.style.display="none";
        }
        else if (flavorInput==="sour"){
            imageSnacks.src = "https://www.kroger.com/product/images/large/front/0004000000266";
            imageSnacks.style.width = "300px";
            imageSnacks.style.height = "300px";
            sweet.style.display="none";
            sour.style.display="block";
            salty.style.display="none";
            umami.style.display="none";
            spicy.style.display="none";
        }
        else if (flavorInput==="salty"){
            imageSnacks.src = "https://i5.walmartimages.com/asr/dbbbc220-62b2-4705-8077-df571820a70c_1.9c7ffbaee8496a1a5d9f6a7a9df162db.jpeg";
            imageSnacks.style.width = "275px";
            imageSnacks.style.height = "300px";
            sweet.style.display="none";
            sour.style.display="none";
            salty.style.display="block";
            umami.style.display="none";
            spicy.style.display="none";
        }
        else if (flavorInput==="umami"){
            imageSnacks.src = "https://m.media-amazon.com/images/I/81RiU5FGrvL.jpg";
            imageSnacks.style.width = "275px";
            imageSnacks.style.height = "300px";
            sweet.style.display="none";
            sour.style.display="none";
            salty.style.display="none";
            umami.style.display="block";
            spicy.style.display="none";
        }
        else if (flavorInput==="spicy"){
            imageSnacks.src = "https://target.scene7.com/is/image/Target/GUEST_c0d5dafb-14db-4ab1-906a-08a483642f98?wid=488&hei=488&fmt=pjpeg";
            imageSnacks.style.width = "300px";
            imageSnacks.style.height = "300px";
            sweet.style.display="none";
            sour.style.display="none";
            salty.style.display="none";
            umami.style.display="none";
            spicy.style.display="block";
        }       
    });

let buttonFive = document.querySelector(".button-five");
let imageTalents = document.querySelector(".image-talents");

buttonFive.addEventListener("click", function (){
    let numberInput = document.querySelector(".number-input").value;
        if (numberInput==="one"){
            imageTalents.src = "https://cdn.winsightmedia.com/platform/files/public/2020-07/background/Subway-Introduces-4.99-Footlong-Sandwich-Menu-b-678x381_1593617003.jpg?VersionId=uwgiA3VKvVV4.BkQ79B0326KP6MSQXlM";
            imageTalents.style.width = "300px";
            imageTalents.style.height = "200px";
            one.style.display="block";
            two.style.display="none";
            three.style.display="none";
            four.style.display="none";
            five.style.display="none";
        }
        else if (numberInput==="two"){
            imageTalents.src = "https://i.pinimg.com/originals/15/7b/42/157b42ede0bfe6edcafcf27f31fac5e3.jpg";
            imageTalents.style.width = "285px";
            imageTalents.style.height = "300px";
            one.style.display="none";
            two.style.display="block";
            three.style.display="none";
            four.style.display="none";
            five.style.display="none";
        }
        else if (numberInput==="three"){
            imageTalents.src = "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/zvzaq1jelndqshd9ptfy.jpg";
            imageTalents.style.width = "300px";
            imageTalents.style.height = "150px";
            one.style.display="none";
            two.style.display="none";
            three.style.display="block";
            four.style.display="none";
            five.style.display="none";
        }
        else if (numberInput==="four"){
            imageTalents.src = "https://assets.iflscience.com/assets/articleNo/35490/aImg/11877/1464388176-180-how-realistic-is-it-to-ask-someone-to-cry-a-river-o.webp";
            imageTalents.style.width = "400px";
            imageTalents.style.width = "300px";
            one.style.display="none";
            two.style.display="none";
            three.style.display="none";
            four.style.display="block";
            five.style.display="none";
        }
        else if (numberInput==="five"){
            imageTalents.src = "https://nypost.com/wp-content/uploads/sites/2/2017/10/102117-spiders-and-snakes.jpg?quality=75&strip=all";
            imageTalents.style.width = "285px";
            imageTalents.style.height = "150px";
            one.style.display="none";
            two.style.display="none";
            three.style.display="none";
            four.style.display="none";
            five.style.display="block";
        }
    });

