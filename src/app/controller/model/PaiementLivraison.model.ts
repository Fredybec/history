import {VenteDto} from './Vente.model';
import {LivraisonDto} from './Livraison.model';
import {ModePaiementDto} from './ModePaiement.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PaiementLivraisonDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateLivraison: Date;
    public montant: number;
    public description: string;
    public dateLivraisonMax: string ;
    public dateLivraisonMin: string ;
    public montantMax: string ;
    public montantMin: string ;
    public livraison: LivraisonDto ;
    public vente: VenteDto ;
    public modePaiement: ModePaiementDto ;

}
