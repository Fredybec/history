import {CommandeDto} from './Commande.model';
import {ReceptionItemDto} from './ReceptionItem.model';
import {EtatReceptionDto} from './EtatReception.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ReceptionDto  extends BaseDto{

    public id: number;
    public description: string;
    public dateReceptionMax: string ;
    public dateReceptionMin: string ;
    public commande: CommandeDto ;
    public etatReception: EtatReceptionDto ;
     public receptionItems: Array<ReceptionItemDto>;

}
