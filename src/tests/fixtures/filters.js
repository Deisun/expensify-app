import {add, sub} from "date-fns";

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: 0,
    endDate: add(0, {days: 3}).valueOf()
}

export { filters, altFilters };
