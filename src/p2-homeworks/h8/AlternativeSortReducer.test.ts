import React from 'react'
import {UserType} from "./HW8";
import {AlternativeSortReducer} from "./AlternativeSortReducer";


let initialState: UserType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Александр', age: 66},
        {_id: 1, name: 'Кот', age: 3},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort in ascending order', () => {
    const newState = AlternativeSortReducer(initialState, {type: 'SORT-BY-ASCENDING-ORDER'})


    expect(newState[0].age).toBe(3);
    expect(newState[0].name).toBe('Кот');
    expect(newState[5].age).toBe(66);
    expect(newState[5]._id).toBe(0);

    console.log(newState)
})
test('sort by decreasing order', () => {
    const newState = AlternativeSortReducer(initialState, {type: 'SORT-BY-DECREASING-ORDER'})

    expect(newState[1].name).toBe("Ирина");
    expect(newState[5]._id).toBe(1);
    expect(newState[1].age).toBe(55);
    expect(newState[5].name).toBe("Кот");
    console.log(newState)
})
test('check age 18', () => {
    const newState = AlternativeSortReducer(initialState, {type: 'CHECK-AGE-18'})

    expect(newState.length).toBe(4);
    expect(newState[0].age > 17).toBe(true);
    expect(newState[1].age > 17).toBe(true);
    expect(newState[2].age > 17).toBe(true);
    expect(newState[3].age > 17).toBe(true);

})
