export function fromEntryToLocaleString(date) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleString('en-GB', options);
}