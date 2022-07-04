import { useState } from "react";
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    const addToCar = payload => {
        setState({
            ...state,
            car: [...state.car, payload]
        });
    }

    const removeFromCar = payload => {
        setState({
            ...state,
            car: state.car.filter(items => items.id !== payload.id)
        });
    }
}

return {
    addToCar,
    removeFromCar,
    state
}

export default useInitialState;