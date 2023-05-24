import {EtatCommandeCriteria} from './EtatCommandeCriteria.model';
import {StoreCriteria} from './StoreCriteria.model';
import {CommandeItemCriteria} from './CommandeItemCriteria.model';
import {ReceptionCriteria} from './ReceptionCriteria.model';
import {ClientCriteria} from './ClientCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class CommandeCriteria  extends BaseCriteria {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public dateCommande: Date;
    public dateCommandeFrom: Date;
    public dateCommandeTo: Date;
     public total: number;
     public totalMin: number;
     public totalMax: number;
     public totalePaye: number;
     public totalePayeMin: number;
     public totalePayeMax: number;
  public client: ClientCriteria ;
  public store: StoreCriteria ;
  public etatCommande: EtatCommandeCriteria ;
      public receptions: Array<ReceptionCriteria>;
      public commandeItems: Array<CommandeItemCriteria>;

}
