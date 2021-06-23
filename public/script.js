
async function createUser(){
    await axios.post('http://localhost:3000/api/users', {
        name: `test ${Math.floor(Math.random() * 10000)}`,
        email: `test${Math.floor(Math.random() * 10000)}@email.com`
    }).catch(err => console.log(err.message));
}

createUser();