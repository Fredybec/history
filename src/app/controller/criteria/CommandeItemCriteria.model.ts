import {EtatCommandeCriteria} from './EtatCommandeCriteria.model';
import {CommandeCriteria} from './CommandeCriteria.model';
import {ProduitCriteria} from './ProduitCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class CommandeItemCriteria  extends BaseCriteria {

    public id: number;
     public prix: number;
     public prixMin: number;
     public prixMax: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
     public quantiteReceptionne: number;
     public quantiteReceptionneMin: number;
     public quantiteReceptionneMax: number;
  public produit: ProduitCriteria ;
  public commande: CommandeCriteria ;
  public etatCommande: EtatCommandeCriteria ;

}
