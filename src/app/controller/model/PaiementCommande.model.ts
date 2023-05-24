import {CommandeDto} from './Commande.model';
import {ModePaiementDto} from './ModePaiement.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PaiementCommandeDto  extends BaseDto{

    public id: number;
    public reference: string;
   public datePaiement: Date;
    public montant: number;
    public description: string;
    public datePaiementMax: string ;
    public datePaiementMin: string ;
    public montantMax: string ;
    public montantMin: string ;
    public commande: CommandeDto ;
    public modePaiement: ModePaiementDto ;

}
