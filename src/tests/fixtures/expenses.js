import {add, sub} from "date-fns";

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    // createdAt: moment(0).subtract(4, 'days').valueOf()
    createdAt: sub(0, {days: 4}).valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    // createdAt: moment(0).add(4, 'days').valueOf()
    createdAt: add(0, {days: 4}).valueOf()
}];
