import {MagasinDto} from './Magasin.model';
import {EtatDemandeDto} from './EtatDemande.model';
import {PaiementDemandeDto} from './PaiementDemande.model';
import {LivraisonDto} from './Livraison.model';
import {ClientDto} from './Client.model';
import {ProduitDto} from './Produit.model';
import {DemandeItemDto} from './DemandeItem.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DemandeDto  extends BaseDto{

    public id: number;
    public produit: ProduitDto ;
    public client: ClientDto ;
    public livraison: LivraisonDto ;
    public magasin: MagasinDto ;
    public etatDemande: EtatDemandeDto ;
     public demandeItems: Array<DemandeItemDto>;
     public paiementDemandes: Array<PaiementDemandeDto>;

}
