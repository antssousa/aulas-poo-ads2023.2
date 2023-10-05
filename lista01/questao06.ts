let ano: number = 2016;

if (ano % 4 === 0 && (ano % 100 !== 0 || ano  % 400 === 0)){
    console.log(`O ano ${ano} é bissexto`);
} else {
    console.log(`O ano ${ano} não é bissexto`);
}