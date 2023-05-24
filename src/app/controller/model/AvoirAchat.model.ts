import {AchatDto} from './Achat.model';
import {AvoirAchatItemDto} from './AvoirAchatItem.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AvoirAchatDto  extends BaseDto{

    public id: number;
   public dateAvoir: Date;
    public montant: number;
    public dateAvoirMax: string ;
    public dateAvoirMin: string ;
    public montantMax: string ;
    public montantMin: string ;
    public achat: AchatDto ;
     public avoirAchatItems: Array<AvoirAchatItemDto>;

}
