
const isTokenValid = (stringToken) => {
    const token = JSON.parse(stringToken);
    console.log(Date.now() - token.expires)
    return Date.now() - token.expires < 0
}

export {isTokenValid};