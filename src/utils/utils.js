export const go = (url) => {
    window.location.href = url;
}   

export const open_whatsap = (number = '52497742') => {
    go(`https://wa.me/${number}`)
}