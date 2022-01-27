const vardi = ['Edgars Laizmanis', 'Stīvs Gailis', 'Baugis Sukmanis', 'Ben Dover', 'Deez Nuts']
const balvas = ['Ligma', 'Bakugans', 'Beyblade', 'Pokemons', 'Dators']
const naudakopa = 1000000;//kopeja summa
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = '';
let rand = Math.random() * 5;//nejauši izvēlēsies 5 cilvēkus
rand = Math.floor(rand);//noapaļo uz leju
console.log(vardi[rand]);//izveido konsolē
for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);//noapaļo uz leju
    let uzvaretajs = vardi[rand];//izvada konsolē
    rindas.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
</tr>`
}