const express = require (`express`)
const app = express()
const port= 8042


const connection = require(`/knexfile`)[`development`];
const database= require(`knex`)(connection);
app.use(express.json())

/*
app.listen (8080, () =>{
    console.log(`listening on port` + 8080)
})*/ 

app.get(`/`, (req, res) =>{

   res.json({

        message: `Get home route working fine `

   });
});

app.listen(8042,()=>{
    console.log(`server running`);
});


app.post(`/habilidades`, (req,res) =>{

    const toCreate = res.body
    database(`habilidades`).insert(toCreate)
    .then((habilidades) =>{
        res.json(habilidades)
    })
    
})


app.delete(`/habilidades`, (req,res) =>{

    const {id} = req.params
    database(`habilidades`)
    .where({id_habilidad: id})
    .del()
    .then((nombre_habilidad) =>{
        res.json(nombre_habilidad) 
    
    })
    
})

app.get(`/habilidades/.id`, (req,res) =>{

    const {id} = req.params
    database(`habilidades`)
    .where({id_habilidad: id})
    .then((nombre_habilidad) =>{
        res.json(nombre_habilidad)
     
    
    })
    
})


app.put(`/habilidades/.id`, (req,res) =>{

    const {id} = req.params
    const toEdit = req.body
    database(`habilidades`)
    .where({id_habilidad: id})
    .update(toEdit)
    .then((nombre_habilidad) =>{
        res.json(nombre_habilidad)
     
    
    })
    
})

