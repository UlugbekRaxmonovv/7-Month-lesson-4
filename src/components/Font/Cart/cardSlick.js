import { createSlice} from '@reduxjs/toolkit'
const cardSlice = createSlice({
    name:'card',
    initialState:{
        value: JSON.parse(localStorage.getItem('cards')) || []
        
    },
    reducers:{
        addToCard(state,action){
            let index = state.value.findIndex(el => el?.name === action?.payload.id)
            if(index < 0){
                state.value = [...state.value,  {...action.payload, quantity:1}]
            }
            localStorage.setItem('cards',JSON.stringify(state.value))
        },
        incrementCardQuantity(state,action){
            let index = state.value?.findIndex(el =>action.payload.id)
            state.value = state.value?.map((item, inx) =>{
                if(index === inx){
                    return {...item,quantity: item.quantity + 1}
                }
                else{
                    item
                }
            localStorage.setItem('cards',JSON.stringify(state.value))

            })
        },
        decrementCardQuantity(state,action){
            let index = state.value?.findIndex(el =>action.payload.id)
            state.value = state.value?.map((item, inx) =>{
                if(index === inx){
                    return {...item,quantity: item.quantity - 1}
                }
                else{
                    item
                }
                localStorage.setItem('cards',JSON.stringify(state.value))

            })
        }},
        removeItemFromCard(state,action){
            state.value = state.value.filter(el => el.id !== action.payload.id)
            localStorage.setItem('cards',JSON.stringify(state.value))

        },
        removeAllFromCardAdd(state,action){
            return state.value = []
        },
        
        
        
    }
)

export const {
            addToCard,
            removeItemFromCard,
             incrementCardQuantity, 
             decrementCardQuantity,
             removeAllFromCardAdd
            }
              =cardSlice.actions
             export default cardSlice.reducer