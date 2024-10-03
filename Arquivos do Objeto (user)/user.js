const express = require('express')
const app = express()
app.use( express .json ())

var vusers = []


/// Função para criação de usuário pelo POST. ///
function create_user(req, res){
    let {genero, idade, nome} = req.body    
    var ouser = {
            "id" : vusers.length+1,
            "genero" : genero,
            "idade" : idade,
            "nome" : nome,
            "deletedAt": null      

        }
        vusers.push(ouser)

        return res.status(201).json({
            message: "Usuário criado.",
            db: vusers
        })

}
app.post('/user', create_user)
    

/// Função para ler todos os usuários pelo GET.///
function read_user(req, res) {
    return res.status(200).json({
        message: "Listando todos os usuários...", 
        db : vusers.filter(u => u.deletedAt == null)  // Aula 6
    } )
}
app.get( '/user/', read_user)




function get_user_by_id(req, res) {  /// Função que recupera usuário por ID específica.
    //let id = req.params.id - Código alternativo.
     let { id } = req.params;

     const idx = vusers[idx].findIndex(u => u.id == id)

        if(idx == -1 || vusers.deletedAt != null){  //Aula 6

            return res.status(404).json({
                message: "Usuário não encontrado.",
                db: null
            })
        }

            return res.status(202).json ({
                message: "Usuário encontrado.",
                db: vusers[idx]
         })
    
}    
app.get( '/user/:id', get_user_by_id)

   /* --------- Código alternativo para get_user_by_id, GET.---------
   
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
}*/







/// Localiza e edita um usuário específico pelo ID por meio do PUT. O arquivo no HTTP deve conter um corpo contendo os dados para serem atualizados.///
function put_user_by_id(req, res){
    //let id = req.params.id
    let { id } = req.params;
            
    const idx = vusers.findIndex(u => u.id == id)

       if(idx === -1 || vusers[idx].deletedAt != null){  //Aula 6
       

           return res.status(404).json({
               message: "Usuário não encontrado",
               db: null
           })
       }

       let {genero, idade, nome}= req.body

       if(genero) vusers[idx].genero = genero
       if(idade) vusers[idx].idade = idade
       if(nome) vusers[idx].nome = nome

           return res.status(202).json ({
               message: "Usuário encontrado e modificado.",
               db: vusers[idx]
})    
}
app.put( '/user/:id', put_user_by_id)


function delete_user(req, res){ //Aula 6: Inclusão de uma função DELETE na api
    let {id} = req.params

    const idx = vusers.findIndex(u => u.id == id)
    if(idx != -1){
        vusers[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Foi de base",
        })
    }

    return res.status(404).json({
        message: "Não encontrado",
    })
}
app.delete('user/:id', delete_user)
            

app.listen(3000, () => {
    console.log('http://localhost:3000')
})


