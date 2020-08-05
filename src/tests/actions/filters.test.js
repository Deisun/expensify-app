import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

test('should generate set start date action object', () => {
    const action = setStartDate(new Date(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: new Date(0)
    })
});

test('should generate set end action object', () => {
    const action = setEndDate(new Date(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: new Date(0)
    })
});

test('should generate set text filter object with text value', () => {
    const action = setTextFilter("testing");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'testing'
    })
})

test('should generate set text filter object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should generate sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
