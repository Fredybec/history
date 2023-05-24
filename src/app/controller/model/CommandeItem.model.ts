import {EtatCommandeDto} from './EtatCommande.model';
import {CommandeDto} from './Commande.model';
import {ProduitDto} from './Produit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CommandeItemDto  extends BaseDto{

    public id: number;
    public prix: number;
    public quantite: number;
    public quantiteReceptionne: number;
    public prixMax: string ;
    public prixMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public quantiteReceptionneMax: string ;
    public quantiteReceptionneMin: string ;
    public produit: ProduitDto ;
    public commande: CommandeDto ;
    public etatCommande: EtatCommandeDto ;

}
