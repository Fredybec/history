import {AvoirVenteCriteria} from './AvoirVenteCriteria.model';
import {ProduitCriteria} from './ProduitCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class AvoirVenteItemCriteria  extends BaseCriteria {

    public id: number;
     public montantAvoir: number;
     public montantAvoirMin: number;
     public montantAvoirMax: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
  public produit: ProduitCriteria ;
  public avoirVente: AvoirVenteCriteria ;

}
