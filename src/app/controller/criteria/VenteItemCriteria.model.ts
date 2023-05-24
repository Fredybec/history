import {VenteCriteria} from './VenteCriteria.model';
import {ProduitCriteria} from './ProduitCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class VenteItemCriteria  extends BaseCriteria {

    public id: number;
     public prixUnitaire: number;
     public prixUnitaireMin: number;
     public prixUnitaireMax: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
     public remise: number;
     public remiseMin: number;
     public remiseMax: number;
     public quantiteAvoir: number;
     public quantiteAvoirMin: number;
     public quantiteAvoirMax: number;
  public produit: ProduitCriteria ;
  public vente: VenteCriteria ;

}
