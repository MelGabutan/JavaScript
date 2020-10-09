function printHome(){
    document.getElementById("Name").innerHTML = "Welcome to my <br> very special page"; 
}

function printTextAndImage(){
    const divOne = document.getElementById("div-1");
    const divTwo = document.getElementById("div-2");
    const pOne = document.createElement("p");
    const chitogeTwo = document.createElement("img");

    pOne.innerText = "In sed quam diam. Praesent a mi at massa varius convallis. Quisque varius ligula condimentum, porttitor nunc sit amet, laoreet tellus. Donec facilisis nibh a orci ultricies, vel faucibus lectus consequat. Nam vestibulum faucibus maximus. Sed lobortis pellentesque tortor et consequat. Curabitur dignissim ipsum vel ex facilisis convallis. Curabitur nec imperdiet velit.";

    pOne.setAttribute("class", "lorem-ipsum");

    chitogeTwo.setAttribute("id", "chitoge-2");
    chitogeTwo.setAttribute("class", "chitoge-images");

    divOne.appendChild(pOne);

    chitogeTwo.src = "chitoge_2.png";

    pOne.appendChild(chitogeTwo);
    pOne.innerHTML = pOne.innerHTML + "Vivamus porttitor massa ac tellus pellentesque, sed dignissim quam luctus. Praesent faucibus eleifend risus ut congue. Suspendisse ut lacus et orci finibus cursus sit amet sit amet nulla. Sed non tellus ac metus pretium consequat ut nec massa. Nullam non dictum mauris, nec finibus nunc. In elementum dui eu consequat bibendum. Aliquam dapibus, nisl in cursus fringilla, nisi nisl porta felis, quis condimentum ante odio vel tortor. Morbi ut ultricies mi, convallis placerat ante. Curabitur nec justo laoreet, posuere diam eu, commodo sapien. In accumsan justo quis orci convallis, vel accumsan nisi porta. Integer diam est, venenatis at eleifend vel, interdum in quam. Nullam et neque lacinia, porttitor nulla quis, dignissim nulla. Etiam pellentesque nisi sed sem consectetur cursus. Quisque ex sapien, posuere sed accumsan a, semper sed nunc. Ut tincidunt lectus quis tempor sodales.";
}

function computeAge(){
    var name = prompt("Enter your name:")
    var year = prompt("Enter your birth year:")
    document.getElementById("user-name").innerHTML = name;
    document.getElementById("user-birth-year").innerHTML = year;
    var age = 2020-year; 
    document.getElementById("user-age").innerHTML = age;
}

function changeParagraphColor(){
    var backgroundColor = prompt("Enter paragraph's background color");
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor tempus lectus in maximus. Aenean ut orci vestibulum, volutpat quam eu, tincidunt nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
    document.getElementById("paragraph").innerHTML = text + "Pellentesque a lectus velit. Mauris vitae dui nulla. In vel dapibus odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vel iaculis libero. Sed sit amet mauris est. Pellentesque molestie metus eros, et dictum dolor suscipit vel. Sed vulputate condimentum tempus. Cras orci neque, semper quis ultrices maximus, maximus convallis augue. Morbi vehicula elementum dolor ac vestibulum. Vestibulum vel elit faucibus, aliquam justo vitae, molestie tortor. Maecenas eget tellus lectus.";
    document.getElementById("paragraph").style.background = backgroundColor;
}

function talkWithMel(){
    var answerPositive;
    var answerNegative;
    var flag;
    var userName;
    var isAnimeFan;
    var favoriteAnime;
    var bestWaifu;
    var answer = prompt("Hello! How are you feeling today?");

    if(answer == "I'm feeling good") 
    {
        flag = confirm("That's great! We should be friends!");
    }
    else if(answer == "I'm feeling bad")
    {
        flag = confirm("Cheer up! I'm here for you. Let's be friends");
    }

    if(flag == true)
    {
        userName = prompt("We should introduce ourselves. I'm Mel, what is your name?");
        alert("Hi " + userName + "! it's nice to meet you!");
        isAnimeFan = prompt("Do you watch animes? (Yes or No)");
        if(isAnimeFan == "Yes")
        {
            favoriteAnime = prompt("What is your favorite anime?");
            if(favoriteAnime == "Nisekoi")
            {
                alert("I declare on this very day that we leveled up into buddies");
                bestWaifu = prompt("Best Waifu: Chitoge (duhh obviously) or Onodera");
                if(bestWaifu == "Chitoge")
                {
                    alert("Relationship level unlocked: Mel's Bestfriend. Good bye bestfriend!");
                }
                else if(bestWaifu == "Onodera")
                {
                    alert("Good bye stranger!");
                }
                else
                {
                    alert("Input properly next time my friend! Good bye");
                }
            }
            else
            {
                alert("If that's the case, you never saw Nisekoi. Go watch it now!");
            }
        }
        else if(isAnimeFan == "No")
        {
            alert("Nani. I suggest that you watch Nisekoi! It's a great show. Go watch it now. Good bye!");
        }
        else
        {
            alert("Input properly next time my friend! Good bye");
        }
    }
    else
    {
        alert("You made Mel sad :( Good bye");
    }

}