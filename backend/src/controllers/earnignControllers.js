const { Earning, User ,Category } = require("./../db.js");


const getEarningByUserIdController=async(UserId)=>{
   const user = await User.findByPk(UserId);
   console.log(UserId);
   if (!user) {
    return "Usuario no exite"
   }
    const earnings = await Earning.findAll({where: {UserId}});
    if (earnings.length == 0) {
    return "El usuario no tiene Ingreso"
    }
    //  console.log(earning);
   return earnings
 }




const postEarningByUserIdController= async (description, account_type, amount, charged, date,AccountId , CategoryId, UserId)=>{
  // Aca hago las validaciones
  const earning = await Earning.create({description, account_type, amount, charged, date,AccountId , CategoryId, UserId,include: [{
    model: Category,
    attributes: ["name"]
  }]});
  return earning;

}

const putEarningByUserIdController = async( id, description, account_type, amount, charged, date,AccountId , CategoryId, UserId)=>{
  const edict_earning = await Earning.findByPk(id);
  console.log(edict_earning);

  if (!edict_earning) {
    return`No existe el reguistro :${edict_earning}` ;
  }
  if (edict_earning.length==0) {
    return "Registro vacio"
  }
  //guardar cambios
  const earning = await Earning.update({description, account_type, amount, charged, date,AccountId , CategoryId, UserId}, {where:{id}});
  return earning
}


const deleteEarningByUserIdController = async(id)=>{

  const earning = await Earning.findByPk(id);
  if (!earning) {
    return`No existe el Registro` ;
  }
   //eliminar la ingreso
    await earning.destroy();
    return'Registro Eliminado con Exito!!'
  }



module.exports={
  getEarningByUserIdController,
  postEarningByUserIdController,
  putEarningByUserIdController,
  deleteEarningByUserIdController
}