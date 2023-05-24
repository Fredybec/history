import {MagasinCriteria} from './MagasinCriteria.model';
import {ReceptionCriteria} from './ReceptionCriteria.model';
import {ProduitCriteria} from './ProduitCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ReceptionItemCriteria  extends BaseCriteria {

    public id: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
  public produit: ProduitCriteria ;
  public magasin: MagasinCriteria ;
  public reception: ReceptionCriteria ;

}
