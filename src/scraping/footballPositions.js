import axios from "axios";
import cheerio from "cheerio";

const footBallPositions = []

const getFootballTeamsPositions = async() => {

    try {

        if(footBallPositions.length === 0){

            const res = await axios("https://www.futbolargentino.com/primera-division/tabla-de-posiciones");
            const htmlData = res.data;
            const $ = cheerio.load(htmlData);
            $("tbody tr", htmlData).each((index, element) => {

                const positionElement = $(element).children(".bg-color")[0];
                const position = $(positionElement).text().trim()

                const teamImg = $(element).children(".equipo").children('a').children('img').eq(0).attr('data-src');

                const team = $(element).children(".equipo").children("a").children(".d-md-inline").text().trim();

                const gamesPlayedElement = $(element).children(".bg-color")[1]
                const gamesPlayed = $(gamesPlayedElement).text().trim()

                const winsElement = $(element).children(".d-none").eq(0)
                const wins = Number($(winsElement).text().trim())

                const tiesElement = $(element).children(".d-none").eq(1)
                const ties = Number($(tiesElement).text().trim())

                const losesElement = $(element).children(".d-none").eq(2)
                const loses = Number($(losesElement).text().trim())

                const gjElement = $(element).children(".d-none").eq(3)
                const gf = $(gjElement).text().trim()

                const gcElement = $(element).children(".d-none").eq(4)
                const gc = $(gcElement).text().trim()

                //has no class
                const dgElement = $(element).children("td").eq(8)
                const dg = $(dgElement).text().trim()

                const scoreElement = $(element).children(".bg-color").eq(2);
                const score = Number($(scoreElement).text().trim())
                
                footBallPositions.push({
                    position,
                    teamImg,
                    team,
                    gamesPlayed,
                    wins,
                    ties,
                    loses,
                    gf,
                    gc,
                    dg,
                    score,
                })
                
            })

            return footBallPositions
        }else{
            
            return footBallPositions
        }
        
        
    } catch (error) {
        console.log(error)
    }

}

export default getFootballTeamsPositions;