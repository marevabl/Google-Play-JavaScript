// Variables globales qui conservent le plus petit et le plus grand numéro d'image possible pour le carrousel
var gImgCarrouselMin = 0;
var gImgCarrouselMax = 5;


//===============================================================================================================
// ÉTAPE 1
/*===============================================================================================================
// Description :    			Cette fonction ajuste les valeurs minimum et maximum permises pour le numéro de
//								l'image du carrousel. Elle valide également si l'image actuellement affichée est
//								permise et si elle ne l'est pas, change l'image affichée par la première image 
//								permise (le minimum permis)
//  
//								Nous voulons permettre d'afficher uniquement les images de la catégorie 
//								actuellement sélectionnée. Si aucune catégorie n'est sélectionnée, toutes les 
//								images sont permises. La catégorie apps comprends les images 0 et 1, la catégorie 
//								films, les images 2 et 3 et la catégorie livres, les images 4 et 5.
//
// Paramètres :
// 		pClasseCategorie:   	La classe de la catégorie sélectionnée ('apps', 'films' ou 'livres') ou '' (chaine
//								  vide) s'il n'y a pas de catégorie sélectionnée.
//=============================================================================================================*/
function ajusterImageCarrouselMinMax(pClasseCategorie) {
	//-----------------------------------------------------------------------------------------------------------
	// Ajustement des valeurs minimum et maximum du numéro d'image du carrousel selon la catégorie sélectionnée.
	//-----------------------------------------------------------------------------------------------------------
    //	Si la classe de la catégorie est apps
    //  	Ajustez les valeurs des variables gImgCarrouselMin et gImgCarrouselMax à 0 et 1 respectivement
    //  Sinon si classe de la catégorie est films
    //      Ajustez les valeurs des variables gImgCarrouselMin et gImgCarrouselMax à 2 et 3 respectivement
    //  Sinon si classe de la catégorie est livres
    //      Ajustez les valeurs des variables gImgCarrouselMin et gImgCarrouselMax à 4 et 5 respectivement
    //  Sinon
    //      Ajustez les valeurs des variables gImgCarrouselMin et gImgCarrouselMax à 0 et 5 respectivement
	
	// À COMPLÉTER ICI !!!
	if(pClasseCategorie=="apps")
	{
    gImgCarrouselMin = 0;
    gImgCarrouselMax = 1;
	}
else if(pClasseCategorie=="films")
{
	gImgCarrouselMin = 2;
    gImgCarrouselMax = 3;
}
else if(pClasseCategorie=="livre")
{
	gImgCarrouselMin = 4;
    gImgCarrouselMax = 5;
}
else 
{
	gImgCarrouselMin = 0;
    gImgCarrouselMax = 5;
}

	//-----------------------------------------------------------------------------------------------------------

	
	//-----------------------------------------------------------------------------------------------------------
	// Récupération du numéro de l'image actuellement affichée dans le carrousel.
	//-----------------------------------------------------------------------------------------------------------
	// Récupérez dans une variable, la valeur de l'attribut data-img-courante de l'élément ayant le id photo.
	
	// À COMPLÉTER ICI !!!
	var imageCourante = $("#photo").attr("data-img-courante")
	//-----------------------------------------------------------------------------------------------------------

	
	//-----------------------------------------------------------------------------------------------------------
	// Validation de l'image actuellement affichée. Elle doit être dans les limites permises. Si l'image affichée
	//	n'est pas permise, nous afficherons la première permise.
	//-----------------------------------------------------------------------------------------------------------
	// Si le numéro de l'image courante du carrousel est plus petit que le minimum permis (gImgCarrouselMin) ou 
	// 	plus grand que le maximum permis (gImgCarrouselMax)
	//      Appelez la fonction ajusterImageCarrousel en transmettant comme information la valeur minimum permise 
	//		 (gImgCarrouselMin).
	//-----------------------------------------------------------------------------------------------------------
	
	// À COMPLÉTER ICI !!!
	if(imageCourante<gImgCarrouselMin || imageCourante>gImgCarrouselMax){
    ajusterImageCarrousel(gImgCarrouselMin);
	}
	//-----------------------------------------------------------------------------------------------------------
}	
//===============================================================================================================

//===============================================================================================================
// ÉTAPE 2
/*===============================================================================================================
// Description :    			Cette fonction ajuste l'image du carrousel ainsi que l'attribut qui dans 
//                    	  		lequel nous conservons le numéro de l'image courante. Elle utilise le
//                    	  		numéro d'image courante reçu en paramètre.
//
// Paramètres :
// 		pImgCourante:   		Le numéro de l'image à afficher dans le carrousel
//=============================================================================================================*/
function ajusterImageCarrousel(pImgCourante) {
	//-----------------------------------------------------------------------------------------------------------
	//  Modification de la source de l'image du carrousel et de l'attribut data qui conserve le numéro courant de
	//	l'image pour afficher celle qui est demandée (paramètre reçu).
	//-----------------------------------------------------------------------------------------------------------
    // Modifiez la source de l'élément ayant le id photo en utilisant la valeur reçue en paramètre
	//		Le résultat doit avoir la forme "images/carrousel/imgX.png"
	//			où X est la valeur reçue en paramètre.
    // Modifiez la valeur de l'attribut data-img-courante pour la valeur reçue en paramètre.
	
	// À COMPLÉTER ICI !!! Comment on modifie la valeur de l'attribut?
	$("#photo").attr("src","images/carrousel/img" + pImgCourante +".png")
	$("#photo").attr("data-img-courante", pImgCourante)
	//-----------------------------------------------------------------------------------------------------------
}	
//===============================================================================================================

//===============================================================================================================
// ÉTAPE 3
/*===============================================================================================================
// Description :    			Cette fonction ajuste le texte du titre et du sous-titre. Elle utilise les 
//                    			valeurs de deux attributs data de l'élément de la sous-catégorie sélectionné reçu
//								en paramètre.
//
// Paramètres :
// 		pElemSousCategorie:		L'élément de la sous-catégorie qui a été cliqué. 
//								    Il est passé déjà sélectionné (pElemSousCategorie contient le résultat du
//									sélecteur). Nous pouvons donc appeler des actions jQuery directement.
//                            			Ex.: pElemSousCategorie.attr(...)
//=============================================================================================================*/
function ajusterDetails(pElemSousCategorie) {
	//-----------------------------------------------------------------------------------------------------------
	// Récupération des valeurs de deux attributs data qui contiennent le titre et le sous-titre à afficher dans 
	//	la page pour la sous-catégorie qui doit être affichée (paramètre reçu).
	//-----------------------------------------------------------------------------------------------------------
	// Récupérez dans deux variables, la valeur des attributs data-titre et data-sous-titre de l'élément de la 
	//	sous-catégorie qui a été cliqué (élément reçu en paramètre)
	
	// À COMPLÉTER ICI !!!
	var titre = $(pElemSousCategorie).attr("data-titre");
    var sousTitre = $(pElemSousCategorie).attr("data-sous-titre");
	//-----------------------------------------------------------------------------------------------------------

	
	//-----------------------------------------------------------------------------------------------------------
	// Modification du texte des deux éléments (titre et sous-titre) pour afficher le texte récupéré dans les 2
	//	variables.
	//-----------------------------------------------------------------------------------------------------------
	// Modifiez le texte de l'élément ayant la classe titre en utilisant la variable qui contient le titre
	
	// À COMPLÉTER ICI !!!
	$(".titre").text(titre);
	// Modifiez le texte de l'élément ayant la classe sous-titre en utilisant la variable qui contient le 
	
	//	sous-titre
	
	// À COMPLÉTER ICI !!!
	$(".sous-titre").text(sousTitre);
	//-----------------------------------------------------------------------------------------------------------
}	
//===============================================================================================================


//===============================================================================================================
// ÉTAPE 4
/*===============================================================================================================
// Description :    			Cette fonction ajuste les images des produits selon la catégorie et la 
//								sous-catégorie sélectionnées.
//
// Paramètres :
//      pElemCategorie:       	L'élément de la catégorie qui a été cliqué. 
//								    Il est passé déjà sélectionné (pElemCategorie contient le résultat du
//									sélecteur). Nous pouvons donc appeler des actions jQuery directement.
//                            			Ex.: pElemCategorie.attr(...)
//      pElemSousCategorie:     L'élément de la sous-catégorie qui a été cliqué. 
//								    Il est passé déjà sélectionné (pElemSousCategorie contient le résultat du
//									sélecteur). Nous pouvons donc appeler des actions jQuery directement.
//                            			Ex.: pElemSousCategorie.attr(...)
//=============================================================================================================*/
function ajusterProduits(pElemCategorie, pElemSousCategorie) {
	//-----------------------------------------------------------------------------------------------------------
	// Récupération du nom du répertoire de la catégorie qui est utilisée dans le chemin de l'image des produits
	//-----------------------------------------------------------------------------------------------------------
	// Récupérez dans une variable, la valeur de l'attribut data-categorie de l'élément de catégorie sélectionnée 
	//	reçu en paramètre
	
	// À COMPLÉTER ICI !!!
	var categorie = $(pElemCategorie).attr("data-categorie")
	//-----------------------------------------------------------------------------------------------------------

	
	//-----------------------------------------------------------------------------------------------------------
	// Récupération du nom du répertoire de la sous-catégorie qui est utilisée dans le chemin de l'image des 
	//	produits
	//-----------------------------------------------------------------------------------------------------------
	// Récupérez dans une variable, la valeur de l'attribut data-sous-categorie de l'élément de sous-catégorie 
	//	sélectionnée reçu en paramètre
	
	// À COMPLÉTER ICI !!!
	var sousCategorie = $(pElemSousCategorie).attr("data-sous-categorie");
	//-----------------------------------------------------------------------------------------------------------

	
	//-----------------------------------------------------------------------------------------------------------
	// Modification de la source des images des produits pour afficher ceux de la catégorie et de la 
	//	sous-catégorie sélectionnées
	//-----------------------------------------------------------------------------------------------------------
    // Pour CHAQUE élément ayant la classe produit
    // 		Modifiez la source de l'élément courant en utilisant les valeurs de vos variables (répertoires pour 
	//		  la catégorie et la sous-catégorie ainsi que l'index du each.
	//				Le résultat doit avoir la forme "images/XXXXXX/YYYYYY/imgZ.png"
	//					où XXXXXX est le répertoire de la catégorie, YYYYYY le répertoire de la sous-catégorie et
	//					  Z l'index du each.
	
	// À COMPLÉTER ICI !!! C'EST QUOI EACH??
	$(".produit").each(function(i)
	{$(this).attr("src","images/"+categorie+"/"+sousCategorie+"/img"+ i +".png")})
	
	//-----------------------------------------------------------------------------------------------------------
}
//===============================================================================================================


//===============================================================================================================
// ÉTAPE 5
/*===============================================================================================================
// Description :    			Cette fonction joue le rôle de chef d'orchestre et s'assure que les éléments de
//								la page affichent les bonnes informations lorsque l'on sélectionne une 
//								sous-catégorie différente. Elle ne fait pas tout le travail... Sinon elle ne 
//								serait pas un chef d'orchestre mais une fonction orchestre! Elle s'occupe de 
//								la classe selection-sous-categorie elle-même et utilise des appels à 2 fonctions
//								pour ajuster le titre et le sous-titre ainsi que les images des produits.
//
// Paramètres :
//      pElemSousCategorie:		L'élément de la sous-catégorie qui a été cliqué. 
//								    Il est passé déjà sélectionné (pElemSousCategorie contient le résultat du
//									sélecteur). Nous pouvons donc appeler des actions jQuery directement.
//                            			Ex.: pElemSousCategorie.attr(...)
//=============================================================================================================*/
function ajusterPagePourSousCategorie(pElemSousCategorie) {
	//-----------------------------------------------------------------------------------------------------------
	// Une seule sous-catégorie peut être sélectionnée à la fois. Il faut donc retirer la sélection de la 
	//	sous-catégorie qui est sélectionnée pour l'ajouter à celle qui a été cliquée.
	//-----------------------------------------------------------------------------------------------------------
	// Retirez la classe selection-sous-categorie tout les éléments qui ont la classe
	
	// À COMPLÉTER ICI !!!
	$(".selection-sous-categorie").removeClass("selection-sous-categorie")
	// Ajoutez la classe selection-sous-categorie à l'élément de sous-catégorie sélectionné reçu en paramètre
	
	// À COMPLÉTER ICI !!!
	$(pElemSousCategorie).addClass("selection-sous-categorie")
	//-----------------------------------------------------------------------------------------------------------
		
		
	//-----------------------------------------------------------------------------------------------------------
	// Appel de la fonction pour ajuster les détails (titre et sous-titre).
	//-----------------------------------------------------------------------------------------------------------
	// Appelez la fonction ajusterDetails qui ajuste le texte des deux éléments en transmettant comme information 
	//	l'élément de la sous-catégorie cliquée reçu en paramètre.
	
	// À COMPLÉTER ICI !!!
	ajusterDetails(pElemSousCategorie) 
	
	//-----------------------------------------------------------------------------------------------------------
    
	
	//-----------------------------------------------------------------------------------------------------------
	// Appel de la fonction pour ajuster les images des produits. Cette fonction a besoin de la catégorie et de 
	//	la sous-categorie pour faire son travail. Nous allons donc récupérer la catégorie avant d'appeler la 
	//	fonction.
	//-----------------------------------------------------------------------------------------------------------
	// Récupérez dans une variable, la catégorie selectionnée (l'élément ayant la classe selection-categorie)
	
	// À COMPLÉTER ICI !!!
	var categorieSelectionnee = $(".selection-categorie")
    // Appelez la fonction ajusterProduits qui ajuste les images des produits en transmettant comme information 
	//	l'élément de la catégorie sélectionnée (votre variable) et l'élément de la sous-catégorie cliquée reçu 
	//	en paramètre.
	
	// À COMPLÉTER ICI !!! 
	 ajusterProduits (categorieSelectionnee)
	

	//-----------------------------------------------------------------------------------------------------------
}
//===============================================================================================================


//===============================================================================================================
// ÉTAPE 6
/*===============================================================================================================
// Description :    			Cette fonction joue le rôle de chef d'orchestre et s'assure que les éléments de
//								la page affichent les bonnes informations lorsque l'on sélectionne une 
//								catégorie différente. Elle s'occupe d'ajuster ce qui dépend de la catégorie 
//								(afficher ou cacher les items de sous-catégories, afficher la section qui 
//								comprend les titres, sous-titres et produits et gérer la classe 
//								selection-categorie. Elle fait appel aux fonctions ajusterPagePourSousCategorie 
//								et ajusterImageCarrouselMinMax pour faire le reste du travail.
//
//								Elle agit de façon différente lors d'un click sur le logo, qui retourne la page 
//								en mode initial, mode dans lequel il n'y a pas de catégorie et de sous-catégorie
//								sélectionnée. Elle doit également cacher la section qui comprend les titres, 
//								sous-titres et produits. Comme le logo n'est pas une catégorie, la valeur null
//								sera transmise lors de l'appel.
//
// Paramètres :
//      pElemCategorie:   		L'élément de la catégorie qui a été cliqué ou null si c'était sur le logo. 
//								    Il est passé déjà sélectionné (pElemCategorie contient le résultat du
//									sélecteur). Nous pouvons donc appeler des actions jQuery directement.
//                            			Ex.: pElemCategorie.attr(...)
//=============================================================================================================*/
function ajusterPagePourCategorie(pElemCategorie) {
	// Cette variable sera utilisée pour conserver le nom de la classe de la catégorie sélectionnée ou une chaine
	//	vide si aucune catégorie n'est sélectionnée.
	var classeCategorie;
	
	
	//-----------------------------------------------------------------------------------------------------------
	// Une seule catégorie et sous-catégorie peut être sélectionnée à la fois. Il faut donc retirer la sélection
	//	de la catégorie et de la sous-catégorie qui sont sélectionnées.
	//-----------------------------------------------------------------------------------------------------------
	// Retirez la classe selection-categorie tout les éléments qui ont la classe
	
	// À COMPLÉTER ICI !!!
	$(".selection-categorie").removeClass("selection-categorie");
	// Retirez la classe selection-sous-categorie tout les éléments qui ont la classe
	
	// À COMPLÉTER ICI !!!
	$(".selection-sous-categorie").removeClass("selection-sous-categorie");
	//-----------------------------------------------------------------------------------------------------------

	
	//-----------------------------------------------------------------------------------------------------------
	// Comme cette fonction est appelée uniquement si la catégorie change, nous devrons afficher des items de
	//	sous-catégorie différents. Commençons par cacher tous les items de sous-catégorie.
	//-----------------------------------------------------------------------------------------------------------
    // Faire disparaitre (fadeOut) tous les items de sous-catégories-item instantanément
	
	// À COMPLÉTER ICI !!!
	$(".sous-catégories-item").fadeOut();
	//-----------------------------------------------------------------------------------------------------------
    
	
	//-----------------------------------------------------------------------------------------------------------
	// Il est maintenant temps d'afficher les éléments requis. Nous allons réagir différemment selon si le click
	//	a eu lieu sur le logo ou sur une catégorie. Pour les clicks sur une catégorie, par défaut, étant donné 
	//	qu'après un click sur une catégorie il n'y a pas de sous-catégorie sélectionnée, nous allons sélectionner 
	//	la première sous-catégorie. Nous avons déjà une fonction qui s'occupe d'ajuster la page pour une 
	//	sous-catégorie alors nous l'utiliserons.
	//-----------------------------------------------------------------------------------------------------------
    // SI nous voulons revenir au mode initial (la valeur du paramètre reçu est null)  
	//		Assignez la valeur '' (chaine vide à la variable classeCategorie)
	//		
    //      Changez l'opacité de l'élément ayant le id main (qui comprend les titres, les sous-titres et les 
	//		  produits) à 0 en une seconde.
    // SINON
    //      Ajoutez la classe selection-categorie à l'élément de catégorie cliqué (reçu en paramètre)
	//
	//		Récupérez dans la variable classeCategorie, la valeur de l'attribut data-categorie de l'élément de 
	//		  catégorie cliqué (reçu en paramètre). Il s'agit de la classe assignée à la catégorie.
	//
    //      Récupérez dans une variable, le premier élément de sous-catégorie appartenant à la catégorie cliquée
	//		  (cet élément est le premier ayant à la fois la classe sous-categorie-item et la classe de la 
	//		  catégorie cliquée récupérée dans la variable classeCategorie).
	//
    //      Faire apparaitre (fadeIn) tous les éléments ayant à la fois la classe sous-categorie-item et la classe 
	//		  de la catégorie cliquée récupérée dans la variable classeCategorie. Comme l'instruction précédente 
	//		  sauf que nous les voulons tous, pas uniquement le premier.)
	//
    //      Changez l'opacité de l'élément ayant le id main (qui comprend les titres, les sous-titres et les 
	//		  produits) à 1 en une seconde.
	//
    //      Appelez la fonction ajusterPagePourSousCategorie en transmettant comme information le premier 
	//		  élément de sous-catégorie que vous avez déjà récupéré dans une variable.
	
	// À COMPLÉTER ICI !!!
	if(pElemCategorie !=0)
	{
classeCategorie = "";
$("#main").fadeTo(0,1000);
	}

else{
$(pElemCategorie).addClass("selection-categorie");
classeCategorie = $(pElemCategorie).attr("data-categorie");
var premiereCategorie = $(".sous-categorie-item."+ classeCategorie).fisrt()
$(".sous-categorie-item."+ classeCategorie).fadeIn()
$("#main").fadeTo(1000,0);
ajusterPagePourSousCategorie(premiereCategorie)
}
	//-----------------------------------------------------------------------------------------------------------

	
	//-----------------------------------------------------------------------------------------------------------
	// Il est possible que l'image affichée dans le carrousel ne soit plus valide. La fonction 
	//	ajusterImageCarrouselMinMax s'occupe de valider le tout et de modifier l'image affichée si elle n'est 
	//	pas valide.
	//-----------------------------------------------------------------------------------------------------------
    // Appelez la fonction ajusterImageCarrouselMinMax en transmettant comme information la classe de la 
	//	catégorie cliquée récupérée dans la variable classeCategorie.
	
	// À COMPLÉTER ICI !!!
	ajusterImageCarrouselMinMax(classeCategorie)
	//-----------------------------------------------------------------------------------------------------------
}
//===============================================================================================================


$(document).ready(function() {

    
    //===========================================================================================================
    // ÉTAPE 7
	/*===========================================================================================================
	// Gestionnaire d'événement mouseover sur les items de catégorie
    //
    // Description :    		Lors d'un mouseover sur une catégorie, elle ajoute la classe over à l'élément 
	//							ciblé
	//=========================================================================================================*/
    $('.categorie-item').on('mouseover', function(){
		//-------------------------------------------------------------------------------------------------------
        // Ajoutez la classe over à l'élément ciblé
	
		// À COMPLÉTER ICI !!!
	$(this).addClass("over")
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 8
	/*===========================================================================================================
	// Gestionnaire d'événement mouseout sur les items de catégorie
    //
    // Description :    		Lors d'un mouseout sur une catégorie, elle retire la classe over de l'élément 
	//							ciblé
	//=========================================================================================================*/
    $('.categorie-item').on('mouseout', function(){
		//-------------------------------------------------------------------------------------------------------
        // Retirez la classe over de l'élément ciblé
		
		// À COMPLÉTER ICI !!!
	$(this).removeClass("over")
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 9
	/*===========================================================================================================
	// Gestionnaire d'événement mouseover sur les items de sous-categorie
    //
    // Description :    		Lors d'un mouseover sur une sous-catégorie, elle ajoute la classe over à 
	//							l'élément ciblé
	//=========================================================================================================*/
    $('.sous-categorie-item').on('mouseover', function(){
		//-------------------------------------------------------------------------------------------------------
        // Ajoutez la classe over à l'élément ciblé
	
		// À COMPLÉTER ICI !!!
		$(this).addClass("over")
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 10
	/*===========================================================================================================
	// Gestionnaire d'événement mouseout sur les items de sous-categorie
    //
    // Description :    		Lors d'un mouseout sur une sous-catégorie, elle retire la classe over de 
    //                    		l'élément ciblé
	//=========================================================================================================*/
    $('.sous-categorie-item').on('mouseout', function(){
		//-------------------------------------------------------------------------------------------------------
        // Retirez la classe over de l'élément ciblé
	
		// À COMPLÉTER ICI !!!
		$(this).removeClass("over")
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 11
	/*===========================================================================================================
	// Gestionnaire d'événement mouseover sur les produits
    //
    // Description :    		Lors d'un mouseover sur un produit, elle ajoute la classe over à l'élément ciblé
	//=========================================================================================================*/
    $('.produit').on('mouseover', function(){
		//-------------------------------------------------------------------------------------------------------
        // Ajoutez la classe over à l'élément ciblé
	
		// À COMPLÉTER ICI !!!
		$(this).addClass("over")
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 12
	/*===========================================================================================================
	// Gestionnaire d'événement mouseout sur les produits
    //
    // Description :    		Lors d'un mouseout sur un produit, elle retire la classe over de l'élément ciblé
	//=========================================================================================================*/
    $('.produit').on('mouseout', function(){
		//-------------------------------------------------------------------------------------------------------
        // Retirez la classe over de l'élément ciblé
	
		// À COMPLÉTER ICI !!!
		$(this).removeClass("over")
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 13
	/*===========================================================================================================
	// Gestionnaire d'événement click sur les produits
    //
    // Description :    		Lors d'un click sur un des produits, elle change la source de l'image du zoom par 
	//							celle du produit cliqué et fait apparaitre l'overlay (élément couvrant la 
	//							entièrement la page et qui contient l'image du zoom)
	//=========================================================================================================*/
    $('.produit').on('click', function(){
		//-------------------------------------------------------------------------------------------------------
        // Remplacez la source de l'image du zoom (celle dont le id est zoom) par la source de l'élément ciblé
	
		// À COMPLÉTER ICI !!! ?? comment mettre de 0 à 7
	$("#zoom").attr("src",$(this).attr("src"))
		//-------------------------------------------------------------------------------------------------------
        
		
		//-------------------------------------------------------------------------------------------------------
        // Faites apparaitre (fadeIn) l'élément dont le id est overlay en une demie seconde
	
		// À COMPLÉTER ICI !!!
		$("#overlay").fadeIn(500,0);
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 14
	/*===========================================================================================================
	// Gestionnaire d'événement click sur l'overlay
    //
    // Description :    		Lors d'un click sur l'overlay, elle le fait disparaitre.
	//=========================================================================================================*/
    $('#overlay').on('click', function(){
		//-------------------------------------------------------------------------------------------------------
        // Faites disparaitre (fadeOut) l'élément ciblé en une demie seconde
		
		// À COMPLÉTER ICI !!!
	$(this).fadeOut(500,0);
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
    
    //===========================================================================================================
    // ÉTAPE 15
	/*===========================================================================================================
	// Gestionnaire d'événement click sur les flèches du carrousel
    //
    // Description :    		Lors d'un click sur une des deux flèches du carousel, elle se charge de trouver 
	//							le numéro de la nouvelle image à afficher et appelle la fonction 
	//							ajusterImageCarrousel pour changer l'image. Pour savoir quelle des deux flèche 
	//							a été cliquée, elle valide si l'élément cliqué à la classe left. Si oui, il 
	//							s'agit de la flèche de gauche, sinon, c'est celle de droite. Le numéro de l'image 
	//							courante se trouve dans l'attribut data-img-courante de la photo. Après avoir 
	//							incrémenté ou décrémenté la valeur (selon la flche cliquée), elle véréfie si le
	//							numéro se trouve hors des numéros permis (qui se trouvent dans les variables 
	//							globales gImgCarrouselMin et gImgCarrouselMax) et ajuste si nécessaire.
	//=========================================================================================================*/
	$('.arrow').on('click', function() {
		//-------------------------------------------------------------------------------------------------------
        // Récupérez dans une variable, le numéro de l'image courante (attribut data-img-courante de l'élément 
		//	ayant le id #photo.
	
		// À COMPLÉTER ICI !!! LE NUMERO????
	var numero = $("#photo").attr("data-img-courante")
		//-------------------------------------------------------------------------------------------------------
        
		
		//-------------------------------------------------------------------------------------------------------
		// Selon la flèche cliquée, nous incrémentons ou décrémentons le numéro de l'image. Il faut ajuster si le 
		//	numéro de l'image est plus petit que le minimum ou plus grand que le maximum.
		//-------------------------------------------------------------------------------------------------------
        // Si l'élément ciblé a la classe left (il s'agit de la flèche de gauche)
        //		Décrémentez la valeur du numéro de l'image courante (récupérée dans une variable)
		//
        //      Si la nouvelle valeur du numéro de l'image est plus petite quela valeur minimum (gImgCarrouselMin)
        //      	Ajustez la valeur du numéro de l'image courante à la valeur maximum (gImgCarrouselMax)
        // Sinon
        //      Incrémentez la valeur du numéro de l'image courante (récupérée dans une variable)
		//		
        //      Si la valeur du numéro de l'image courante est plus grande que la valeur maximum (gImgCarrouselMax)
        //          Ajustez la valeur du numéro de l'image courante à la valeur minimum (gImgCarrouselMin)
	
		// À COMPLÉTER ICI !!!
	if (this == "left")
	{
      numero--;
          if(numero<gImgCarrouselMin)
	       {	numero=gImgCarrouselMax}

	}
    
	
	else
	{
    numero++;
      if (numero>gImgCarrouselMax)
         {numero=gImgCarrouselMin}
	}
		//-------------------------------------------------------------------------------------------------------
        
		
		//-------------------------------------------------------------------------------------------------------
		// Il faut maintenant afficher la nouvelle image
		//-------------------------------------------------------------------------------------------------------
        // Appelez la fonction ajusterImageCarrousel en transmettant comme information le nouveau numéro de 
		//	l'image courante.
	
		// À COMPLÉTER ICI !!!
	ajusterImageCarrousel(numero)
		//-------------------------------------------------------------------------------------------------------
	});
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 16
	/*===========================================================================================================
	// Gestionnaire d'événement click sur les sous-categorie
    //
    // Description :    		Lors d'un click sur une sous-catégorie, si ce n'est pas la sous-catégorie qui est
	//							déjà sélectionnée, elle appelle la fonction ajusterPagePourSousCategorie pour 
	//							ajuster les éléments de la page.
	//=========================================================================================================*/
    $('.sous-categorie-item').on('click', function(){
		//-------------------------------------------------------------------------------------------------------
		// Pour savoir si le click a eu lieu sur la sous-catégorie qui est déjà sélectionnée ou non, nous allons
		//	utiliser la valeur de l'attribut data-sous-catégorie.
		//-------------------------------------------------------------------------------------------------------
        // Récupérez dans une variable, la valeur de l'attribut data-sous-categorie de la sous-catégorie 
		//	sélectionnée.
		
	
		// À COMPLÉTER ICI !!!
	var sousCat = $(this).attr("data-sous-categorie");
        // Récupérez dans une variable, la valeur de l'attribut data-sous-categorie de la sous-catégorie cliquée 
		//	(élément ciblé)
	
		// À COMPLÉTER ICI !!!
	var sousCatCible = $(this).attr("data-sous-categorie");
		//-------------------------------------------------------------------------------------------------------

        
		//-------------------------------------------------------------------------------------------------------
		// Nous ajusterons la page uniquement si nous avons besoin de la faire. Si le click a lieu sur la 
		//	sous-catégorie qui est déjà sélectionnée, la page affiche déjà les bonnes informations alors nous 
		//	n'avons rien à faire. Nous voulons faire le travail uniquement si ce n'est pas la même sous-catégorie
		//-------------------------------------------------------------------------------------------------------
        // Si les valeurs des deux attributs data-sous-categorie récupérées dans les variables sont différentes
		// 		Appelez la fonction ajusterPagePourSousCategorie en transmettant comme information l'élément 
		//		 ciblé dans un sélecteur
	
		// À COMPLÉTER ICI !!!
	if (sousCat != sousCatCible){ ajusterPagePourSousCategorie(pElemCategorie)}
		//-------------------------------------------------------------------------------------------------------
    });
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 17
	/*===========================================================================================================
	// Gestionnaire d'événement click sur les catégories
    //
    // Description :    		Lors d'un click sur une des trois catégories(Applications, Films ou Livres), si 
	//							ce n'est pas la catégorie qui est déjà sélectionnée, elle ajuste la classe du
	//							body et appelle la fonction ajusterPagePourCategorie pour ajuster les éléments 
	//							de la page.
	//=========================================================================================================*/
	$('.categorie-item').on('click', function() {
		//-------------------------------------------------------------------------------------------------------
		// Pour savoir si le click a eu lieu sur la catégorie qui est déjà sélectionnée ou non, nous allons
		//	utiliser la valeur de l'attribut data-catégorie.
		//-------------------------------------------------------------------------------------------------------
        // Récupérez dans une variable, la valeur de l'attribut data-categorie de la catégorie sélectionnée.

		// À COMPLÉTER ICI !!!
		var clickTrois = $(pElemCategorie).attr("data-categorie");
        // Récupérez dans une variable, la valeur de l'attribut data-categorie de la catégorie cliquée (élément 
		//	ciblé)
	
		// À COMPLÉTER ICI !!!
	var clickTroisCible = $(this).attr("data-categorie")
		//-------------------------------------------------------------------------------------------------------

        
		//-------------------------------------------------------------------------------------------------------
		// Nous ajusterons la page uniquement si nous avons besoin de la faire. Si le click a lieu sur la 
		//	catégorie qui est déjà sélectionnée, la page affiche déjà les bonnes informations alors nous n'avons 
		//	rien à faire. Nous voulons faire le travail uniquement si ce n'est pas la même catégorie. Le body
		//	possède la classe de la catégorie sélectionnée (la valeur de l'attribut data-categorie). Il faut
		//  la retirer et ajouter celle ce la catégorie cliquée.
		//-------------------------------------------------------------------------------------------------------
        // Si les valeurs des deux attributs data-categorie récupérées dans les variables sont différentes
		//		Retirez la classe categorieSelect du body.
		//
		//		Ajoutez la classe categorieCible au body.
		//
		// 		Appelez la fonction ajusterPagePourCategorie en transmettant comme information l'élément ciblé 
		//		  dans un sélecteur
	
		// À COMPLÉTER ICI !!!
	if(clickTrois != clickTroisCible){
		$("body").removeClass("categorieSelect");
		$("body").addClass("categorieCible");
        ajusterPagePourCategorie(pElemCategorie)
	}
		//-------------------------------------------------------------------------------------------------------
	});
    //===========================================================================================================
	
        
    //===========================================================================================================
    // ÉTAPE 18
	/*===========================================================================================================
	// Gestionnaire d'événement click sur le logo du Play Store
    // Description :    		Lors d'un click sur le logo, la page retourne dans son mode initial en faisant 
	//							appel à la fonction ajusterPagePourCategorie. Evidemment, si aucune catégorie 
	//							n'est sélectionnée, la page affiche déjà les bonnes informations. Nous ferons le 
	//							travail seulement si une catégorie est sélectionnée. 
	//=========================================================================================================*/
	$('#logo').on('click', function() {
		//-------------------------------------------------------------------------------------------------------
		// Nous pouvons savoir si une catégorie est sélectionnée en comptant le nombre d'éléments ayant la classe
		//	selection-categorie. Comme le logo n'est pas une catégorie, nous fournirons comme information à la
		//	fonction appelée la valeur null à la place de l'élément de catégorie cliqué.
		//-------------------------------------------------------------------------------------------------------
        // Si une catégorie est sélectionnée (il y a un élément qui a la classe selection-categorie)
        //      Appelez la fonction ajusterPagePourCategorie en transmettant la valeur null.
	
		// À COMPLÉTER ICI !!!
	if (pElemCategorie){
ajusterPagePourCategorie(0)
	}
		//-------------------------------------------------------------------------------------------------------
	});
    //===========================================================================================================
});
