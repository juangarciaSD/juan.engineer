export const genId = () => {
    let text = ""
    const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < 12; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }

    return text
}