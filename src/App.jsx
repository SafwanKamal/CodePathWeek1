import { useState } from 'react'
import './App.css'
import './Post.jsx'
import Post from './Post.jsx';

function App() {
  return(
    <div>
      <h1>Indie Game Catalogue</h1>

      <div className='post-container'>
        <Post title='Hollow Knight' description='A haunting hand-drawn metroidvania where a tiny knight explores a vast, ruined insect kingdom.' src='./src/assets/posters/hollow_knight.jpg'></Post>
        <Post title='Hollow Knight Silksong' description='Fast-paced metroidvania, prequel to the acclaimed Hollow Knight, where Hornet journeys through a new kingdom, mastering agility, crafting tools, and battling fierce foes.' src='./src/assets/posters/hollow_knight_silksong.jpg'></Post>
        <Post title='Shovel Knight' description='Retro-inspired action platformer where a valiant knight wields a shovel to battle foes and uncover treasures.' src='./src/assets/posters/shovel_knight.jpg'></Post>
        <Post title='Dead Cells' description='Rogue-lite action platformer with fluid combat, procedurally generated levels, and permadeath-driven progression.' src='./src/assets/posters/dead_cells.jpg'></Post>
        <Post title='Rain World' description='Survive as a fragile slugcat in a harsh ecosystem filled with predators and storms.' src='./src/assets/posters/rain_world.jpg'></Post>
        <Post title='Cult of The Lamb' description='Lead a cult, gather followers, and spread devotion while battling dark forces.' src='./src/assets/posters/cult_of_the_lamb.jpg'></Post>
        <Post title='Stray' description='Explore a cyberpunk city as a stray cat uncovering secrets with a drone companion.' src='./src/assets/posters/stray.jpg'></Post>
        <Post title='Cassette Beasts' description='Fuse monsters recorded on cassettes and explore an open world with retro RPG charm.' src='./src/assets/posters/cassette_beasts.jpg'></Post>
        <Post title='Stardew Valley' description='Build a farm, befriend townsfolk, and find peace in a cozy countryside life.' src='./src/assets/posters/stardew_valley.jpg'></Post>
        <Post title='Hades' description='Battle out of the Underworld as Zagreus in a fast, story-rich roguelike adventure.' src='./src/assets/posters/hades.jpg'></Post>
      </div>
    </div>
  );
}

export default App
