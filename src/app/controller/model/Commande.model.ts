import {EtatCommandeDto} from './EtatCommande.model';
import {StoreDto} from './Store.model';
import {CommandeItemDto} from './CommandeItem.model';
import {ReceptionDto} from './Reception.model';
import {ClientDto} from './Client.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CommandeDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateCommande: Date;
    public total: number;
    public totalePaye: number;
    public dateCommandeMax: string ;
    public dateCommandeMin: string ;
    public totalMax: string ;
    public totalMin: string ;
    public totalePayeMax: string ;
    public totalePayeMin: string ;
    public client: ClientDto ;
    public store: StoreDto ;
    public etatCommande: EtatCommandeDto ;
     public receptions: Array<ReceptionDto>;
     public commandeItems: Array<CommandeItemDto>;

}
