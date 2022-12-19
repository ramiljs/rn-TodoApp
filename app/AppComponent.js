import React, { useReducer } from 'react'
import { View } from 'react-native'
import { List, Input, Title } from './featured/index'
import {
    actionCreators,
    reducer,
    initialState,
} from './featured/store/todosSlice'

export const AppComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <View>
            <Title>To-Do List</Title>
            <Input
                placeholder={'Type a todo, then hit enter!'}
                onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
            />
            <List
                items={state.items}
                onPressItem={(id) => dispatch(actionCreators.remove(id))}
            />
        </View>
    )
}
