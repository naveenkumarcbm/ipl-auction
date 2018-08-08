# ipl-auction
# IPL Online Team Selection

#     Description:

    A simple Angular (v6.0) based application, which allows to select the players from the available list. Users can drag
    the players card from the available list to the selected list.

    1'st Section holds the available list of players
    2'nd Section will hold the selected players from the available list
    3'rd Section holds the details such as
            *  Total Budget
            *  Used amount
            *  Available amount

#    Player detail
        Each player object will have the Player Name, Batting Rank, Bowling Rank and All Rounder Rank properties
        as below

        player : {
            name : String;
            batting : number;
            bowling : number;
            allRounder : number;
        }

    It has validation for the Budget overlimit and number of players
        Maximum allowed budget = 1,00,000
        Number of player = 15 players
    

#    Technology used:
        * Angular v6.0
        * Bootstrap v4.0
        * JSON
        * RxJS v6.0

#    Installation:
        Using Angular CLI we can serve the application locally using
            - install nodeJS (v9.0+)
            - npm install (downloads node_modules packages)
            - ng serve (optional port specification --prod)
            - ng build --prod -aot (Production build)
