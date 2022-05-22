import React, { Component } from 'react';
import axios from 'axios';



fetchJoke = async () => {
    try {
        const { data } = await axios.get(
            'https://api.chucknorris.io/jokes/random'
        );
        return data.value;
    } catch (err) {
        console.error(err);
    }
};
fetchJokeCat = async (category) => {
    try {
        const { data } = await axios.get(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        return data.value;
    } catch (err) {
        console.error(err);
    }
};