if(document.querySelector('.assoMenuBar'))
/* Si un <button> dans un <div class="buttonsTabs"> existe fait ce code */
{
    /* Sélectionne tous les <button> dans <div class="buttonsTabs"> en les mettant dans un tableau */
    const buttonsTab = document.querySelectorAll('.assoMenuBar button');

    /* Sélectionne toutes les <div> dans <div class="contentTabs"> en les mettant dans un tableau */
    const tabs = document.querySelectorAll('.assoMenuBar div');

    /* 
        Un tableau en javascript commence à l'index 0
        On crée une boucle qui va incrémenter la variable i depuis 0
        Et va boucler autant de fois qu'il y a d'éléments 
        Pour connaître le nombre d'élément on se sert de la longueur (length) du tableau
        buttonsTab.length ici vaut 4, la boucle s'effectue donc 4 fois
        Donc i vaudra 0 puis 1 puis 2 puis 3
        i++ = ajoute 1 à i à chaque fin de boucle 
        for(valeur départ, condition, incrémente valeur départ)
    */
    for(let i = 0 ; i < buttonsTab.length ; i++)
    {
        /* 
            buttonsTab[0] équivaut au bouton "onglet 1"
            Écoute l'événement au click qui se fait sur ce bouton et enclenche la fonction callback (fonction appelé par une autre fonction)
            addEventListener('nom événément', fonction callback) 
        */
        buttonsTab[i].addEventListener
        ('click', () => {
            /* 
                tabs[0] équivaut à <div class="tab1"> 
                ! = l'inverse de
                Si l'attribut class de tab1 ne contien pas la classe "active" fait le code 
            */
            if(!tabs[i].classList.contains('active'))
            {
                /* Pour chaque element contenu dans le tableau tabs (donc chaque contenu d'onglet : tab1, tab2, ...) 
                Retire la classe "active" de cet élément */
                tabs.forEach(element => {
                    element.classList.remove('active');
                })

                /* Ensuite ajoute la classe "active" sur tab[0] donc tab1 */
                tabs[i].classList.add('active');
            }
            
        })
    }
}


