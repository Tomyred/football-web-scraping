import { Router } from "express";
import getFootballTeamsPositions from "../scraping/footballPositions.js";

const router = Router();

router.get("/fbpositions",async (req,res)=>{

    const data = await getFootballTeamsPositions()
    res.send({
        count:data.length,
        data
    })
    
})

export default router;