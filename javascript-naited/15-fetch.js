async function getUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error("Kasutajat ei leitud");
    }

    const user = await response.json();

    console.log("Kasutaja nimi:");
    console.log(user.name);

    console.log("Kogu kasutaja:");
    console.log(user);

  } catch (error) {
    console.log("Tekkis viga:");

    console.log(error.message);
  }
}

getUser(1);