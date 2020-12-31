export const SaveGame = () => {
    console.log('Game saved.');
};

export const LoadGame = (userId) => {
    console.log('Game loaded.');
};

export const ResetGame = (userId) => {
    console.log('Game reset.');
};

export const userLogin = (onClick) => {
    console.log("logging in from util file")
    onClick();
}

