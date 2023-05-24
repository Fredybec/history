import {DemandeCriteria} from './DemandeCriteria.model';
import {ProduitCriteria} from './ProduitCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class DemandeItemCriteria  extends BaseCriteria {

    public id: number;
     public prix: number;
     public prixMin: number;
     public prixMax: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
  public produit: ProduitCriteria ;
  public demande: DemandeCriteria ;

}
