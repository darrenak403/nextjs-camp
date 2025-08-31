import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PetSlice {
    dog: number 
    cat: number
    bird: number
    fish: number
    rabbit: number
    hamster: number
    turtle: number
    guinea_pig: number
}

const initialState: PetSlice = {
    dog: 0,
    cat: 0,
    bird: 0,
    fish: 0,
    rabbit: 0,
    hamster: 0,
    turtle: 0,
    guinea_pig: 0,
}

export const petSlice = createSlice({
    name: "pet",
    initialState,
    reducers: {
        setDog: (state: { dog: number }, action: PayloadAction<number>) => {
            state.dog = action.payload
        },
        setCat: (state, action: PayloadAction<number>) => {
            state.cat = action.payload
        },
        setBird: (state, action: PayloadAction<number>) => {
            state.bird = action.payload
        },
        setFish: (state, action: PayloadAction<number>) => {
            state.fish = action.payload
        },
        setRabbit: (state, action: PayloadAction<number>) => {
            state.rabbit = action.payload
        },
        setHamster: (state, action: PayloadAction<number>) => {
            state.hamster = action.payload
        },
        setTurtle: (state, action: PayloadAction<number>) => {
            state.turtle = action.payload
        },
        setGuineaPig: (state, action: PayloadAction<number>) => {
            state.guinea_pig = action.payload
        },
    },
})

export const petReducer = petSlice.reducer
export const {
    setDog,
    setCat,
    setBird,
    setFish,
    setRabbit,
    setHamster,
    setTurtle,
    setGuineaPig,
} = petSlice.actions