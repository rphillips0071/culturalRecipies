import React, { useState, useEffect } from 'react';

function Home() {
    const [search, setSearch] = useState('');
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetch('https://rphillips0071.github.io/culturalRecipieAPI/full_recipes.json')
            .then(response => response.json())
            .then(data => setRecipeList(data))
            .catch(err => console.error(err));
    }, []);

    const clickTesting = (e) => {
        e.preventDefault();
        console.log(search);
        setSearch('');
    };

    return (
        <>
            <div className='heading'><h1>Cultural Recipe Lookup</h1></div>
            <div className='info'>
                <p>Welcome to Cultural Recipe Lookup! This platform allows you to explore and discover the top dishes from around the world. Simply enter the name of a country in the search bar below, and you'll be presented with the top 3 traditional dishes and one popular dessert from that country. Whether you're looking to try new recipes or learn more about different cuisines, our database provides an exciting culinary journey for you. Start exploring now and enjoy the flavors of the world!</p>
            </div>
            <div className='search_recipie'>
                <input
                    type="text"
                    placeholder='Search Country'
                    className='input_field'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <br />
                <button onClick={clickTesting}>Search</button>
            </div>
            <div className='recipe_card_container'>

                <h1>Top Savory Dishes</h1>
                <div className='savory'>

                    {recipeList.map((country, countryIndex) => (
                        country.dishes.map((dish, dishIndex) => (

                            <div key={dishIndex} className='card'>
                                <img src={`https://rphillips0071.github.io/culturalRecipieAPI/assets/${dish.name}.jpg`} alt="" />
                                <h2 className='card_heading'>Country</h2>
                                <h3>{country.country}</h3>
                                <h2 className='card_heading'>Dish</h2>
                                <h3>{dish.name}</h3>
                                <h2 className='card_heading'>About This Dish</h2>
                                <p>{dish.description}</p>
                            </div>
                        ))
                    ))}
                </div>
            </div>

            <div className='dessert_card_container'>
                {recipeList.map((country, countryIndex) => (
                    <div key={`dessert-${countryIndex}`}>
                        <h1>Dessert</h1>
                        <div className='dessert'>
                            <div className='dessert_card'>
                            <img src={`https://rphillips0071.github.io/culturalRecipieAPI/assets/${country.dessert.name}.jpg`} alt="" />
                                <h2 className='card_heading'>Country</h2> <br /> 
                                <h3>{country.country}</h3>
                                <h2 className='card_heading'>Dish </h2><br /> <h3>{country.dessert.name}</h3>
                                <h2 className='card_heading'>About This Dish </h2>
                                <p>{country.dessert.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
