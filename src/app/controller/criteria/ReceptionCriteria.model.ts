import {CommandeCriteria} from './CommandeCriteria.model';
import {ReceptionItemCriteria} from './ReceptionItemCriteria.model';
import {EtatReceptionCriteria} from './EtatReceptionCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ReceptionCriteria  extends BaseCriteria {

    public id: number;
    public description: string;
    public descriptionLike: string;
  public commande: CommandeCriteria ;
  public etatReception: EtatReceptionCriteria ;
      public receptionItems: Array<ReceptionItemCriteria>;

}
