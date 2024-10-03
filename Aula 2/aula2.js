


var vusers = []

function create_user(pnome, psenha, pemail, ptelefones){
	var ouser = {
	"nome":pnome,
	"senha":psenha,
	"email":pemail,
	"telefone":ptelefones,
	}
	vusers.push(ouser)
}

create_user("Eduardo", 123, "eduardo.mcd@hotmail.com", [992699120, 99999, 99999, 999])
create_user("Rodelinha", 345, "ro_delinha@hotmail.com",33715432 )
console.log(vusers)