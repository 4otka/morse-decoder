const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arr_element = '';
    let result = '';
    let arr1 = ''
    arr = expr.match( /.{1,10}/g );

    arr.forEach((e) => {
        e.replace(/^0+/g, '');
        let i = 0;
        while (i < e.length){
            if (e[i] === '1' && e[i+1] === '1') {
                arr_element += '-'
            } else if (e[i] === '1' && e[i+1] === '0') {
                arr_element += '.'
            } else if (e[i] === '*' ) {
                arr_element += ' ';
                i = 10;
            }
            i++;
            i++;
        }
        if (arr_element === ' ') {
            arr1 += ' ';
            arr_element= '';
        }
        for (let key in MORSE_TABLE) {
            if (key === arr_element) {
                result = result + MORSE_TABLE[key];
                arr_element= '';
            }
        }
        arr1 += result;
        result = '';
    });
    return arr1;
}
module.exports = {
    decode
}