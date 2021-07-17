import { createSlice } from '@reduxjs/toolkit';
import gameDefaults from './gameDefaults';

const initialState = {
    mode: "CLICKING",
    gameStats: gameDefaults,
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
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        updateSeeds: (state, action) => {
            state.resources.seeds = state.resources.seeds + action.payload;
        },
        updateResource: (state, action) => {
            let amount = action.payload.amount;
            switch(action.payload.type) {
                case 'seeds':
                    state.resources.seeds = state.resources.seeds + amount;
                    break;
                case 'water':
                    state.resources.water = state.resources.water + amount;
                    break;
                case 'stars':
                    state.resources.stars = state.resources.stars + amount;
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
    addTree, 
    setMode, 
    removeTree, 
    resetTrees, 
    ageTrees, 
    growTrees,
    removeTreeById,
    updateSeeds,
    updateResource,
    resetResource
    } = gameSlice.actions;

export const selectGameStats = (state) => state.game.gameStats;

export default gameSlice.reducer;