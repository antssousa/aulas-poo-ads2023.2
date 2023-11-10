class Livro{
    isbn: string;
    titulo: string;
    autor: string;
    disponivel: boolean;

   
    constructor(isbn: string, titulo: string, autor: string, disponivel: boolean) { // ctrl + alt + up/ down; ctrl + d
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
        
    }

   toString(): string{
    return `ISBN: ${this.isbn}\nTítulo: ${this.titulo}\nAutor: ${this.autor}\n`;
   }
}

class Biblioteca{
    livros: Livro[];

    constructor(){
        this.livros = [];
    }

    adicionar(l: Livro): void{
        this.livros.push(l);
    }

    emprestar(isbn: string): boolean{
        for (const livro of this.livros) {
            if (livro.isbn === isbn && livro.disponivel){
                livro.disponivel = false;
                return true;
            }
        }
        return false;
    }

    consultarPorISBN(isbn: string): Livro | null{
        for (const livro of this.livros) {
            if(livro.isbn === isbn){
                return livro;
            }
        }
        return null;
    }
}