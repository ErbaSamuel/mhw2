const Piattiarry = [
    {
        titolo:'Spaghetti alla Carbonara',
        immagine:'e1.avif',
        descrizione:'Un classico romano, irresistibile.'
    },
    {
        titolo:'Riso alla cantonese',
        immagine:'e3.avif',
        descrizione:'Cremoso riso originario di milano.'
    },
    {
        titolo:'Spaghetti all Amatriciana',
        immagine: 'e2.avif',
        descrizione:'Un altro classico della cucina romana'
    },
    {
        titolo:'Pasta alla gricia',
        immagine:'e5.avif',
        descrizione:'Roma e pasta,sta bene ovunque.'
    },
    {
        titolo:'Ravioli cinesi al vapore',
        immagine:'e4.avif',
        descrizione:'Famosi in tutto il mondo,buoni e semplici da fare.'
    }
]

function view_desc(event){  
    event.currentTarget.textContent='NASCONDI';
    event.currentTarget.removeEventListener("click", view_desc);
    const details = event.currentTarget.parentNode.querySelector('.descr');
    details.classList.remove('hidden');
    event.currentTarget.addEventListener("click",Dview_desc);
}

function Dview_desc(event){
    event.currentTarget.textContent='DESCRIZIONE';
    event.currentTarget.removeEventListener("click", Dview_desc);
    const details = event.currentTarget.parentNode.querySelector('.descr');
    details.classList.add('hidden');
    event.currentTarget.addEventListener("click",view_desc);
}

function agg_favorites(event){
    
    const button= event.currentTarget;
    
    button.src="stella-piena.png";
    button.removeEventListener("click",agg_favorites);
    button.addEventListener("click",rem_favorites);
    
    const elemento = button.parentNode.parentNode;
    const box_preferiti = document.querySelector("#preferiti");
    box_preferiti.classList.add("Event");
    box_preferiti.classList.remove('hidden');
    const copiato = elemento.cloneNode(true);
    copiato.classList.add('Event');
    copiato.querySelector('img').addEventListener("click",rem2_favorites);
    

    
    const more_info = copiato.querySelector('button');
    more_info.addEventListener("click",view_desc);

    box_preferiti.appendChild(copiato);

}

function rem_favorites(event){

    event.currentTarget.removeEventListener("click",rem_favorites);
    event.currentTarget.src="stella-vuota.png";

    const elemento_sel = event.currentTarget.parentNode.querySelector("h1");
    const elementi = document.querySelectorAll("#preferiti.Event h1");
    for(Event of elementi){
        if(Event.textContent === elemento_sel.textContent){
            Event.parentNode.parentNode.remove();
        }
    }
    if(document.querySelector("#preferiti.Event") == null){
        document.querySelector('#preferiti').classList.add('hidden');
    }
    event.currentTarget.addEventListener("click",agg_favorites);
}
function rem2_favorites(event){
    event.currentTarget.removeEventListener("click",rem2_favorites);
    const elemento_sel = event.currentTarget.parentNode.querySelector("h1");
    const elementi = document.querySelectorAll("#box_piatti.Event h1");
    for(Event of elementi){
        if(Event.textContent === elemento_sel.textContent){
            Event.parentNode.querySelector('img').src="stella-vuota.png";
            elemento_sel.parentNode.parentNode.remove();
        }
        Event.parentNode.querySelector('img').addEventListener("click",agg_favorites);
    }
    if(document.querySelector("#preferiti .Event") == null){
        document.querySelector('#preferiti').classList.add('hidden');
    }
    event.currentTarget.addEventListener("click",agg_favorites);
}

function createElement(titolo,immagine,descrizione){
    
    const Event = document.createElement('div');
    Event.classList.add('Event');
    
    const favorites = document.createElement('div');
    favorites.classList.add('Stella');
    
    
    const title= document.createElement('h1');
    title.textContent = titolo;
    
    const star=document.createElement('img')
    star.src="stella-vuota.png";
    star.addEventListener('click',agg_favorites);
    
    
    const image= document.createElement('img');
    image.src= immagine;
    
    const desc= document.createElement('p');
    desc.classList.add('descr');
    desc.textContent= descrizione;
    desc.classList.add('hidden');

    const more_info = document.createElement('button');
    more_info.classList.add('more_info')
    more_info.textContent = "DESCRIZIONE";
    more_info.addEventListener("click",view_desc);
    
    favorites.appendChild(title);
    favorites.appendChild(star);
    Event.appendChild(favorites);
    Event.appendChild(image);
    Event.appendChild(desc);
    Event.appendChild(more_info);
    return Event;
}
const posizione = document.querySelector('#box_piatti');
posizione.classList.add('Event');
for(let i=0;i<Piattiarry.length;i++)
{
    const titolo=Piattiarry[i].titolo;
    const immagine=Piattiarry[i].immagine;
    const descrizione=Piattiarry[i].descrizione;

    const Piatti = createElement(titolo,immagine,descrizione);
    posizione.appendChild(Piatti);
}