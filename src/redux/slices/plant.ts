import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PlantSlice {
    carrot: number 
    potato: number
    tomato: number
    onion: number
    garlic: number
    cabbage: number
    broccoli: number
    cauliflower: number
}

const initialState: PlantSlice = {
    carrot: 0,
    potato: 0,
    tomato: 0,
    onion: 0,
    garlic: 0,
    cabbage: 0,
    broccoli: 0,
    cauliflower: 0,
}

export const plantSlice = createSlice({
    name: "plant",
    initialState,
    reducers: {
        setCarrot: (state, action: PayloadAction<number>) => {
            state.carrot = action.payload
        },
        setPotato: (state, action: PayloadAction<number>) => {
            state.potato = action.payload
        },
        setTomato: (state, action: PayloadAction<number>) => {
            state.tomato = action.payload
        },
        setOnion: (state, action: PayloadAction<number>) => {
            state.onion = action.payload
        },
        setGarlic: (state, action: PayloadAction<number>) => {
            state.garlic = action.payload
        },
        setCabbage: (state, action: PayloadAction<number>) => {
            state.cabbage = action.payload
        },
        setBroccoli: (state, action: PayloadAction<number>) => {
            state.broccoli = action.payload
        },
        setCauliflower: (state, action: PayloadAction<number>) => {
            state.cauliflower = action.payload
        },
    },
})

export const plantReducer = plantSlice.reducer
export const {
    setCarrot,
    setPotato,
    setTomato,
    setOnion,
    setGarlic,
    setCabbage,
    setBroccoli,
    setCauliflower,
} = plantSlice.actions