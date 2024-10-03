const express = require('express')
const app = express()

app.use( express .json ())

var vusers = []


function create_user(pgenero, pidade, pnome){
        var ouser = {
            "id" : vusers.length+1,
            "genero" : pgenero,
            "idade" : pidade,
            "nome" : pnome
        }
        vusers.push(ouser)
}


app.post('/user' , (req, res) => {
    let {genero, idade, nome} = req.body

    create_user(genero, idade, nome)

    return res.status(201).json({
        message: "Usuario criado",
        // db: vusers
    })
})




app.get( '/user/', (req, res) => {
    return res.status(200).json({
        message: "Todos usuários", 
        db : vusers
    } )
} )



app.get( '/user/:id', (req, res) => {
    //let id = req.params.id
     let { id } = req.params;

     for( let i = 0; i < vusers.length; i++){
        if ( vusers[i].id == id){
            return res.status(201).json({
                message: "Usuario encontrado",
                 db: vusers[i]
            })
        }

     }
    
    
    
    return res.status(200).json({
        message: "Usuário não encontrado", 
        db : []
    } )
} )



            /// Método alternativo sugerido pelo Marcius. ///
/*app.get( '/user/:id', (req, res) => {
    //let id = req.params.id
     let { id } = req.params;

     const idx = vusers.findIndex(u => u.id == id)

        if(idx === -1){

            return res.status(404).json({
                message: "Não encontrado",
                db: null
            })
        }

            return res.status(202),json ({
                message: "Encontrei",
                db: vusers[idx]
         })
    })*/





app.put( '/user/:id', (req, res) => {
                //let id = req.params.id
                 let { id } = req.params;
            
                 const idx = vusers.findIndex(u => u.id == id)
            
                    if(idx === -1){
            
                        return res.status(404).json({
                            message: "Não encontrado",
                            db: null
                        })
                    }

                    let {genero, idade, nome}= req.body

                    if(genero) vusers[idx].genero = genero
                    if(idade) vusers[idx].idade = idade
                    if(nome) vusers[idx].nome = nome
            
                        return res.status(202).json ({
                            message: "Encontrei",
                            db: vusers[idx]
        })    
     })
                    
            
        


app.listen(3000, () => {
    console.log('http://localhost:3000')
})


