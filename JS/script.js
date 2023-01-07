btn = document.querySelector('#btn');
ok = document.querySelector('#ok');
con = document.querySelector('#con');
form = document.forms[0];
moyenne = document.querySelector('#moyenne');

btn.addEventListener('click', () => {
    droit = form.droit.value;
    gdp = form.gdp.value;
    agl = form.agl.value;
    droit2 = form.droit2.value;
    gdp2 = form.gdp2.value;
    agl2 = form.agl2.value;

    bdd = form.bdd.value;
    fonda = form.fonda.value;
    progra = form.progra.value;
    bdd2 = form.bdd2.value;
    fonda2 = form.fonda2.value;
    progra2 = form.progra2.value;

    graph = form.graph.value;
    mep = form.mep.value;
    design = form.design.value;
    graph2 = form.graph2.value;
    mep2 = form.mep2.value;
    design2 = form.design2.value;

    archi = form.archi.value;
    cms = form.cms.value;
    inte = form.inte.value;
    archi2 = form.archi2.value;
    cms2 = form.cms2.value;
    inte2 = form.inte2.value;

    diviseur = 60;
    inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.value == "") {
            diviseur = diviseur - input.getAttribute('data-coeff');
        }
    });

    calcul = ( droit*2 + droit2*2 + gdp*2 + gdp2*2 + agl*2 + agl2*2 + bdd*2 + bdd2*2 + fonda*3 + fonda2*3 + progra*3 + progra2*3 + design*3 + design2*3 + graph*3 + graph2*3 + mep*3 + mep2*3 + archi*2 + archi2*2 + cms*2 + cms2*2 + inte*3 + inte2*3 ) / diviseur;

    h3Moyenne = document.createElement('h3');
    moyenne = document.createElement('input');

    h3Moyenne.innerHTML = "Moyenne :";
    moyenne.value = calcul;

    body = document.querySelector('body');

    if (moyenne) {
        document.body.removeChild(body.lastElementChild);
        document.body.removeChild(body.lastElementChild);
    } else {
        console.log('samarche pa');
    };

    if (moyenne.value < 10) {
        moyenne.style.color = 'red';
        h3Moyenne.style.color = 'red';
    } else {
        moyenne.style.color = 'green';
        h3Moyenne.style.color = 'green';
    }

    document.body.appendChild(h3Moyenne);
    document.body.appendChild(moyenne);

});

ok.addEventListener('click', () => {
    alert('vous avez été ajouté à la base de données avec succès !');
});

con.addEventListener('click', () => {
    alert('Vous êtes 18e.');
});
