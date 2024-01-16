const animais = [
    {nome:'Urubu rei',img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img1.jpg" , tipo:"ave"},
    {nome:'Arara Canindé' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img2.jpg" , tipo:"ave"},
    {nome:'SERIEMA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img3.jpg" , tipo:"ave"},
    {nome:'GRALHA DO CAMPO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img4.jpg" , tipo:"ave"},
    {nome:'JANDAIA MARACANÃ' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img6.jpg" , tipo:"ave"},
    {nome:'TUCANO TOCO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img7.jpg" , tipo:"ave"},
    {nome:'TUCANO DE PEITO BRANCO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img8.jpg" , tipo:"ave"},
    {nome:'TUCANO DE BICO VERDE' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img9.jpg" , tipo:"ave"},
    {nome:'TURACO DE FACE BRANCA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img11.jpg" , tipo:"ave"},
    {nome:'URUMUTUM' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img12.jpg" , tipo:"ave"},
    {nome:'TIRIBA DE TESTA VERMELHA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img13.jpg" , tipo:"ave"},
    {nome:'MARACANÃ DO BURITI' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img14.jpg" , tipo:"ave"},
    {nome:'TIRIBA DE TESTA VERMELHA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img16.jpg" , tipo:"ave"},
    {nome:'MARACANÃ DO BURITI' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img17.jpg" , tipo:"ave"},
    {nome:'MARACANÃ NOBRE' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img18.jpg" , tipo:"ave"},
    {nome:'PERIQUITO ENCTRO AMARELO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img18.jpg" , tipo:"ave"},
    {nome:'GRALHA PICAÇA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img5.jpg" , tipo:"ave"},
    {nome:'JACUGUAÇU' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img10.jpg" , tipo:"ave"},
    {nome:'JANDAIA MINEIRA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img15.jpg" , tipo:"ave"},
    {nome:'PERIQUITO VERDE' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img20.jpg" , tipo:"ave"},
    {nome:'MARIANINHA CABEÇA AMARELA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img21.jpg" , tipo:"ave"},
    {nome:'MAITACA CABEÇA AZUL' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img22.jpg" , tipo:"ave"},
    {nome:'PAPAGAIO VERDADEIRO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img23.jpg" , tipo:"ave"},
    {nome:'ANACÃ' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img24.jpg" , tipo:"ave"},
    {nome:'GRAÚNA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img25.jpg" , tipo:"ave"},
    {nome:'PICA-PAU BRANCO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img26.jpg" , tipo:"ave"},
    {nome:'MOCHO ORELHUDO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img27.jpg" , tipo:"ave"},
    {nome:'URUBU COMUM' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img28.jpg" , tipo:"ave"},
    {nome:'GAVIÃO PERNILONGO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img29.jpg" , tipo:"ave"},
    {nome:'GAVIÃO CARRAPATEIRO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img30.jpg" , tipo:"ave"},
    {nome:'GAVIÃO CARIJÓ' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img31.jpg" , tipo:"ave"},
    {nome:'IRERÊ' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img32.jpg" , tipo:"ave"},
    {nome:'GANSO AFRICANO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img33.jpg" , tipo:"ave"},
    {nome:'CISNE NEGRO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img34.jpg" , tipo:"ave"},
    {nome:'EMA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img35.jpg" , tipo:"ave"},
    {nome:'Mutum de penacho' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img36.jpg" , tipo:"ave"},
    {nome:'Arara vermelha' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img37.jpg" , tipo:"ave"},
    {nome:'Papagaio peito roxo' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img38.jpg" , tipo:"ave"},
    {nome:'Mutum do sudeste' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img39.jpg" , tipo:"ave"},
    {nome:'Mico-leão-de-cara-dourada' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img40.jpg", tipo:"primata"},
    {nome:'Sagui-da-serra-escuro' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img41.jpg", tipo:"primata"},
    {nome:'Bugio-ruivo' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img42.jpg", tipo:"primata"},
    {nome:'SAGUI DE TUFO BRANCO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img43.jpg", tipo:"primata"},
    {nome:'SAUÁ' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img44.jpg", tipo:"primata"},
    {nome:'Gato do mato pequeno' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img45.jpg", tipo:"felideos"},
    {nome:'Onça pintada' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img46.jpg", tipo:"felideos"},
    {nome:'Onça parda' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img47.jpg", tipo:"felideos"},
    {nome:'LEÃO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img48.jpg", tipo:"felideos"},
    {nome:'GATO MOURISCO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img49.jpg", tipo:"felideos"},
    {nome:'JABUTI PIRANGA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img51.jpg"},
    {nome:'TEIÚ ARGENTINO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img50.jpg"},
    {nome:'IGUANA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img52.jpg",tipo:"repteis"},
    {nome:'CÁGADO CABEÇUDO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img53.jpg",tipo:"repteis"},
    {nome:'TARTARUGA MORDEDORA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img54.jpg",tipo:"repteis"},
    {nome:'TARTARUGA DO RIO COOTER' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img55.jpg",tipo:"repteis"},
    {nome:'JIBOIA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img56.jpg",tipo:"repteis"},
    {nome:'JACARÉ DO PAPO AMARELO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img57.jpg",tipo:"repteis"},
    {nome:'CÁGADO DE BARBICHA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img58.jpg",tipo:"repteis"},
    {nome:'TARTARUGA ORELHA VERMELHA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img59.jpg",tipo:"repteis"},
    {nome:'Lobo guará' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img60.jpg",tipo:"mamifero"},
    {nome:'Lontra' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img61.jpg",tipo:"mamifero"},
    {nome:'Cateto' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img62.jpg",tipo:"mamifero"},
    {nome:'Anta' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img63.jpg",tipo:"mamifero"},
    {nome:'VEADO CATINGUEIRO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img64.jpg",tipo:"mamifero"},
    {nome:'FURÃO' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img65.jpg",tipo:"mamifero"},
    {nome:'QUATI' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img66.jpg",tipo:"mamifero"},
    {nome:'CAPIVARA' , img:"https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/img67.jpg",tipo:"mamifero"}
];
const animaisPorTipo = animais.reduce((acc, animal) => {
    if (!acc[animal.tipo]) {
        acc[animal.tipo] = [];
    }
    acc[animal.tipo].push(animal);
    return acc;
}, {});



animais.forEach(item=> {
    $('#container-animais').append(
        `<div class="card" style="width: 18rem;">
                    <img src="${item.img}" class="card-img-top rounded image-animal" height="230" alt="${item.nome}">
                    <div class="card-body">
                      <h5 class="card-title text-center ">${item.nome}</h5>
                    </div>
        </div>`
        
        );
});
$("body").on("click",".image-animal",function(){

    $("#container-fade").removeClass("d-none")
    $(this).addClass("zoom");
})

$("body").on("click",".zoom,#container-fade",function(){
    $(".zoom").removeClass("zoom");
    $("#container-fade").addClass("d-none")
    
})