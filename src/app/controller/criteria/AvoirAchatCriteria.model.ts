import {AchatCriteria} from './AchatCriteria.model';
import {AvoirAchatItemCriteria} from './AvoirAchatItemCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class AvoirAchatCriteria  extends BaseCriteria {

    public id: number;
    public dateAvoir: Date;
    public dateAvoirFrom: Date;
    public dateAvoirTo: Date;
     public montant: number;
     public montantMin: number;
     public montantMax: number;
  public achat: AchatCriteria ;
      public avoirAchatItems: Array<AvoirAchatItemCriteria>;

}
