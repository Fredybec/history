import {AchatDto} from './Achat.model';
import {ModePaiementDto} from './ModePaiement.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PaiementAchatDto  extends BaseDto{

    public id: number;
    public reference: string;
   public datePaiement: Date;
    public montant: number;
    public description: string;
    public datePaiementMax: string ;
    public datePaiementMin: string ;
    public montantMax: string ;
    public montantMin: string ;
    public achat: AchatDto ;
    public modePaiement: ModePaiementDto ;

}
