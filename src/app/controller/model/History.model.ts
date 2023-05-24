import {FournisseurDto} from './Fournisseur.model';
import {AchatItemDto} from './AchatItem.model';
import {StoreDto} from './Store.model';
import {PaiementAchatDto} from './PaiementAchat.model';
import {AvoirAchatDto} from './AvoirAchat.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class HistoryDto  extends BaseDto{

    public id: number;
    public objectName: string;
   public data: string;
    public userId: number;
    public userName: string;
    public actionType: string;
    public objectId: number ;
    public date: Date ;

}
