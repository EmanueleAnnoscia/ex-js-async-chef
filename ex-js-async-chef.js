import dayjs from "dayjs"

async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json()
    return obj;
}

const getChefBirthday = async (id) => {
    let recipe;

    try {
        recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);

        if (recipe.message) {
            throw new Error(recipe.message);
        }

        const userId = recipe.userId

        let chef;

        chef = await fetchJson(`https://dummyjson.com/users/${userId}`);


        if (chef.message) {
            throw new Error(chef.message);
        }


        return chef.birthDate

    } catch (error) {
        console.error("Errore in getChefBirthday:", error.message);
        throw error;
    }
}


(async () => {
    try {
        const birthday = await getChefBirthday(3)
        console.log('Ecco la data di nascita dello chef:', dayjs(birthday).format('DD/MM/YYYY'))
    } catch (error) {
        console.error(error.message);
    }
})();