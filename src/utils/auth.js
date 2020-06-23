
const isTokenValid = (stringToken) => {
    try {
        const token = JSON.parse(stringToken);
    
        return Date.now() - token.expires < 0
    } catch(e) {
        return false
    }
}

export {isTokenValid};