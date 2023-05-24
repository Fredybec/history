import {FournisseurCriteria} from './FournisseurCriteria.model';
import {AchatItemCriteria} from './AchatItemCriteria.model';
import {StoreCriteria} from './StoreCriteria.model';
import {PaiementAchatCriteria} from './PaiementAchatCriteria.model';
import {AvoirAchatCriteria} from './AvoirAchatCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class HistoryCriteria  extends BaseCriteria {

    protected objectName:string;
    protected  objectNameLike:string;
    protected  data:string;
    protected  dataLike:string;
    protected  userId:string;
    protected  username:string;
    protected  usernameLike:string;
    protected  actionType:string;
    protected  actionTypeLike:string;
    protected  objectId:string;
    protected  date:Date;
    protected  dateFrom:Date;
    protected dateTo:Date;

}
