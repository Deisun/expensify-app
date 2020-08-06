import { isBefore , isAfter, isSameDay } from "date-fns";

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAt = new Date(expense.createdAt);
        const startDateMatch = startDate ? isBefore(startDate, createdAt) || isSameDay(startDate, createdAt) : true;
        const endDateMatch = endDate ? isAfter(endDate, createdAt) || isSameDay(startDate, createdAt) : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
