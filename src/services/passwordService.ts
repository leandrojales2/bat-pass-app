export default function generatePass (number: number) {
    let password: string = ''
    let characters: string = 'Aa@$#123456789abcdefghijFGHIJKLMNOP!'
    

    for(let index = 0; index < number; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }


    return password
}