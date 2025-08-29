async function fetchJson(url){
    const response = await fetch (url);
    const obj = await response.json()
    return obj;
}

const getChefBirthday = async (id) => {
    let recipe;

    try{
        recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    }catch(error){
        throw new Error (`Non posso recuperare a ricetta con id: ${id}`);
    }finally{
       console.log('Ecco la tua Ricetta!');
    }

    if(recipe.message){
        throw new Error(recipe.message);
    }

    let birthdayChef;

    try{
        birthdayChef = await fetchJson(`https://dummyjson.com/users/${userId}`);
    }catch(error){
        throw new Error (`Non posso recuperare lo chef con id: ${userId}`);
    }finally{
       console.log('Ecco la data di nascita del nostro Chef!');
    }

    if(birthdayChef.message){
        throw new Error(birthdayChef.message);
    }


    return(...recipe, birthdayChef)

}


(async()=>{
    try{
        const birthday = await getChefBirthday(1)
        console.log('Ecco la data di nascita dello chef:', birthday)
    }catch(error){
        console.error(error);
    }
})