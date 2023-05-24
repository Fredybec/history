import {FournisseurDto} from './Fournisseur.model';
import {AchatItemDto} from './AchatItem.model';
import {StoreDto} from './Store.model';
import {PaiementAchatDto} from './PaiementAchat.model';
import {AvoirAchatDto} from './AvoirAchat.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AchatDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateAchat: Date;
    public total: number;
    public totalPaye: number;
    public description: string;
    public dateAchatMax: string ;
    public dateAchatMin: string ;
    public totalMax: string ;
    public totalMin: string ;
    public totalPayeMax: string ;
    public totalPayeMin: string ;
    public fournisseur: FournisseurDto ;
    public store: StoreDto ;
     public paiementAchats: Array<PaiementAchatDto>;
     public achatItems: Array<AchatItemDto>;
     public avoirAchats: Array<AvoirAchatDto>;

}
