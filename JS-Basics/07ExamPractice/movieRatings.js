function movieRatings(input) {

    let numberOfMovies = Number(input[0]);
    let index = 1;

    let highestRate = 0;
    let lowestRate = 0;
    let nameHighest = " ";
    let nameLowest = " ";

    while (true) {

        movie = input[index];
        index++;
        rating = input[index];
        index++;

        if (rating > highestRate){
            highestRate = rating;
            nameHighest = movie;
        } else if(rating < highestRate){
            lowestRate = rating;
            nameLowest = movie;
        }
    }

}

/* "{име на филма с най-висок рейтинг} is with highest rating: {рейтинг на филма}"
"{име на филма с най-нисък рейтинг} is with lowest rating: {рейтинг на филма}"
"Average rating: {средният рейтинг на всички филми}"
*/

movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);