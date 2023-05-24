import {LivraisonItemDto} from './LivraisonItem.model';
import {EtatLivraisonDto} from './EtatLivraison.model';
import {DemandeDto} from './Demande.model';
import {ClientDto} from './Client.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class LivraisonDto  extends BaseDto{

    public id: number;
   public dateLivraison: Date;
    public dateLivraisonMax: string ;
    public dateLivraisonMin: string ;
    public demande: DemandeDto ;
    public etatLivraison: EtatLivraisonDto ;
    public client: ClientDto ;
     public livraisonItems: Array<LivraisonItemDto>;

}
