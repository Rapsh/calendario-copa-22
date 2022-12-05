function createGame(player1, pl1score, pl2score, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}"/>
            <strong>${pl1score}</strong><strong>${pl2score}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}"/>
        </li>
`
}

let delay = -0.1;

function createCard(date, day, games) {
    delay = delay + 0.1;
    return `
        <div class="card-results" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div> 
    `
}

document.querySelector("#game-results").innerHTML = 
   createCard("20/11", "domingo", createGame("qatar",0,2,"ecuador")
   )+
   createCard("21/11", "segunda", 
   createGame("england",6,2,"iran")+
   createGame("senegal",0,2,"netherlands")+
   createGame("united-states",1,1,"wales")
   )+

   createCard("22/11", "terça", 
   createGame("argentina",1,2,"saudi-arabia")+
   createGame("denmark",0,0,"tunisia")+
   createGame("mexico",0,0,"poland")+
   createGame("france",4,1,"australia")
   )+
   createCard("23/11", "quarta", 
   createGame("morocco",0,0,"croatia")+
   createGame("germany",1,2,"japan")+
   createGame("spain",7,0,"costa-rica")+
   createGame("belgium",1,0,"canada")
   )+

   createCard("24/11","quinta", 
    createGame("switzerland", 1,0, "cameroon") +
    createGame("uruguay", 0,0, "southk") +
    createGame("portugal", 3,2, "ghana") +
    createGame("brazil", 2,0, "serbia") 
    )+

   createCard("25/11","sexta", 
    createGame("wales", 0,2, "iran") +
    createGame("qatar", 1,3, "senegal") +
    createGame("netherlands", 1,1, "ecuador") +
    createGame("england", 0,0, "united-states") 
    )+

   createCard("26/11","sabado", 
    createGame("tunisia", 0,1, "australia") +
    createGame("poland", 2,0,"saudi-arabia") +
    createGame("france", 2,1,"denmark") +
    createGame("argentina", 2,0,"mexico") 
    )+

   createCard("27/11","domingo", 
    createGame("japan", 0,1,"costa-rica") +
    createGame("belgium", 0,2,"morocco") +
    createGame("croatia", 4,1,"canada") +
    createGame("spain", 1,1,"germany") 
    )+
    
   createCard("28/11", "segunda", 
    createGame('cameroon', 3,3, 'serbia') +
    createGame('southk', 2,3, 'ghana') +
    createGame('brazil', 1,0, 'switzerland') +
    createGame('portugal', 2,0,  'uruguay') 
    )+

   createCard("29/11", "terça", 
    createGame('ecuador', 1,2,  'senegal') +
    createGame('netherlands', 2,0,  'qatar') +
    createGame('iran', 0,1,  'united-states') +
    createGame('wales', 0,3,  'england') 
    )+

   createCard("30/11", "quarta", 
    createGame('tunisia', 1,0,  'france') +
    createGame('australia', 1,0, 'denmark') +
    createGame('poland', 0,2,  'argentina') +
    createGame('saudi-arabia', 0,2,  'mexico') 
    )+

   createCard("01/12", "quinta", 
    createGame('croatia', 0,0,  'belgium') +
    createGame('canada', 1,2, 'morocco') +
    createGame('japan', 2,1,  'spain') +
    createGame('costa-rica', 2,4,  'germany') 
    )+

   createCard("02/12", "sexta",
    createGame("southk", 2,1,  "portugal") +
    createGame("ghana", 0,2,  "uruguay") +
    createGame("serbia", 2,3,  "switzerland") +
    createGame("cameroon", 1,0,  "brazil") 
    )+

    createCard("03/12", "sabado",
    createGame("netherlands", 3,1,  "united-states") +
    createGame("argentina", 2,1,  "australia") 
    )+
    createCard("04/12", "domingo",
    createGame("france", 3,0,  "poland") +
    createGame("england", 3,0,  "senegal") 
    )+ 
    createCard("05/12", "segunda",
    createGame("japan", 1,1,  "croatia") +
    createGame("brazil", 0,0, "southk") 
    )+
    createCard("06/12", "terça",
    createGame("morocco", 0,0,  "spain") +
    createGame("portugal", 0,0, "switzerland") 
    ) 