export default function displayPrice(price, lang) {
    switch (lang) {
        case 'ua':
            return `${price?.toFixed(2)} грн`;
        case 'de':
            return `${price?.toFixed(2)} EUR`;
        case 'en':
            return `${price?.toFixed(2)} USD`;
        default:
            return `${price?.toFixed(2)} USD`;
    }
};
