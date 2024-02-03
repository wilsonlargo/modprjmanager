//Administra acciones en un proyecto específico


//Debe modificar el campo en la base de datos caundo hay cambios en el input
async function SaveData(){
    const docRef = GLOBAL.GuardarProyecto(KeyActivo);
}
async function SaveObjetivo(ref, titulo){
    const docRef = GLOBAL.GuardarObjetivos(ref, titulo)
}