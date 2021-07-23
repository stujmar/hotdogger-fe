import { createSlice } from '@reduxjs/toolkit';
import gameDefaults from './gameDefaults';

const initialState = {
    mode: "CLICKING",
    gameStats: gameDefaults,
    time: 0,
    resources: {
        seeds: 10,
        stars: 10,
        water: 10
    }
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        incrementTime: (state) => {
            state.time += 1;
        },
        resetTime: (state) => {
            state.time = 1;
        },
        setTime: (state, action) => {
            state.time = action.payload;
        },
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        updateStat: (state, action) => {
            let amount = action.payload.amount;
            switch(action.payload.type) {
                case 'hotdogs':
                    state.gameStats.hotdogs = state.gameStats.hotdogs + amount;
                    break;
                case 'sauce':
                    state.gameStats.sauce = state.gameStats.sauce + amount;
                    break;
                case 'toppings':
                    state.gameStats.toppings = state.gameStats.toppings + amount;
                    break;
                default:
                    break;
            }
        },
        resetResource: (state, action) => {
            switch(action.payload) {
                case 'seeds':
                    state.resources.seeds = 10;
                    break;
                case 'water':
                    state.resources.water = 10;
                    break;
                case 'stars':
                    state.resources.stars = 10;
                    break;
                default:
                    break;

            }
        }
    }
});

export const { 
    setMode, 
    updateSeeds,
    updateStat,
    resetResource,
    incrementTime
    } = gameSlice.actions;

export const selectGameStats = (state) => state.game.gameStats;
export const selectGameTime = (state) => state.game.time;

export default gameSlice.reducer;