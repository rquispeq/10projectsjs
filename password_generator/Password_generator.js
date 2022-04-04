export class Password_generator{

    constructor(length,uppercase,lowercase,numbers,symbols){
        this.length = length
        this.uppercase = uppercase
        this.lowercase = lowercase
        this.numbers = numbers
        this.symbols = symbols

        this.lower_letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"]
        this.upper_letters = this.lower_letters.map( (e) => e.toUpperCase())
        this.numbers_array = [1,2,3,4,5,6,7,8,9,0]
        this.symbols_array = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}',';','/','<','>','?','¿']

        this.characters = ['uppercase','lowercase','numbers','symbols']
    }

    generatePassword(){
        let password = ''

        for(let i=0; i < this.length; i++){
            password = password + this.getCharacter()
        }

        return password
    }

    getCharacter(){
        
        do{

            let random_character = this.random(0,this.characters.length - 1)
            let character = this.characters[random_character]
    
            if (character == 'uppercase' && this.uppercase) {
                return this.getUpperLetter()
            } else if(character == 'lowercase' && this.lowercase){
                return this.getLowerLetter()
            } else if(character =='numbers' && this.numbers){
                return this.getNumber()
            } else if(character == 'symbols' && this.symbols){
                return this.getSymbol()
            }
        }while(true)
        
    }

    getLowerLetter(){
        let random_position = this.random(0,this.lower_letters.length-1);
        return this.lower_letters[random_position]
    }

    getUpperLetter(){
        let random_position = this.random(0,this.upper_letters.length-1);
        return this.upper_letters[random_position]
    }

    getNumber(){
        let random_position = this.random(0,this.numbers_array.length-1);
        return this.numbers_array[random_position]
    }

    getSymbol(){
        let random_position = this.random(0,this.symbols_array.length-1);
        return this.symbols_array[random_position]
    }

    random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
}