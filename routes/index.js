//traemos el paquete
const { Router } = require('express');
const data = require("../lib/data")
//iniciamos el route
const router = Router()

const {FetchData}=data;
(async()=>{
    console.log(await FetchData.getByCharacterGender("male",3));
})
// crecion de los endpoints
router
    .get("/:id", (req, res)=>{
        const { query } = req;
        res.json({
            msg: "recepcion por id y retorna un personaje",
            body:{
                (async()=>{
                    console.log(await FetchData.getByCharacterGender("male",3));
                })
            },
        });
    })
    .get("/:array", (req, res)=>{
        const { query } = req;
        res.json({
            msg: "recepcion array",
            body:{},
        });
    })
    .get("/:pagina", (req, res)=>{
        const { query } = req;
        res.json({
            msg: "recepcion por pagina",
            body:{},
        });
    })
    .get("/:genero", (req, res)=>{
        const { query } = req;
        res.json({
            msg: "recepcion por genero",
            body:{

                (async()=>{
                    console.log(await FetchData.getByCharacterGender("male",3));
                })
            },
        });
    })