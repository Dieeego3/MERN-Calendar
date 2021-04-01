import { types } from "../types/types";

// {
//     id: 'viene de bd',
//     title: 'Cumpleaños propio',
//     start: moment().toDate(),
//     end: moment().add( 2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     notes: 'Comprar empanadas',
//     user: {
//         _id: '123',
//         name: 'Diego'
//     }
// }

const initialState = {
    events: [],
    activeEvent: null
};


export const calendarReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }

        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }

        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id) 
                ),
                activeEvent: null
            }

        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            }

        case types.evenLogout:
            return {
                ...initialState
            }
    
        default:
            return state;
    }

}