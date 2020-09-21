// Function convert to decimal

function convert() {
    const binary = document.getElementById ('bin').value;
        if (binary === '') return alert ('Please, enter a binary number');
    binary.split('').map((char)=> {
        if (char !== '0' && char !== '1') return alert ('Please, enter a binary number');
    });
    
    const decimal = parseInt(binary,2);
    document.getElementById('dec').value = decimal;
    return true;
}