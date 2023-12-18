interface GerenciadorConteudo{
    publicar(): void;
}

class GerenciadorBlog implements GerenciadorConteudo{

    publicar(): void{
        console.log("Publicando no blog");
    }
}
class GerenciadorVideo implements GerenciadorConteudo{

    publicar(): void{
        console.log("Publicando vídeo");
    }
}
class GerenciadorPodcast implements GerenciadorConteudo{

    publicar(): void{
        console.log("Publicando Podcast");
    }
}

function publicador(g: GerenciadorConteudo){
    g.publicar();
}

const c1 = new GerenciadorBlog();
const c2 = new GerenciadorVideo();
const c3 = new GerenciadorPodcast();

const v: GerenciadorConteudo[] = [];

v.push(c1); 
v.push(c2); 
v.push(c3); 

for (const c of v) {
    publicador(c)
}