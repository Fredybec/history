import {ProprietaireChequeCriteria} from './ProprietaireChequeCriteria.model';
import {BanqueCriteria} from './BanqueCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ProprietaireChequeBanqueCriteria  extends BaseCriteria {

    public id: number;
  public proprietaireCheque: ProprietaireChequeCriteria ;
  public banque: BanqueCriteria ;

}
