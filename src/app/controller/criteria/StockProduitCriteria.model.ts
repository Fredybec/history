import {MagasinCriteria} from './MagasinCriteria.model';
import {ProduitCriteria} from './ProduitCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class StockProduitCriteria  extends BaseCriteria {

    public id: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
     public quantiteDeffecteuse: number;
     public quantiteDeffecteuseMin: number;
     public quantiteDeffecteuseMax: number;
  public magasin: MagasinCriteria ;
  public produit: ProduitCriteria ;

}
