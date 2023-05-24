import {DemandeDto} from './Demande.model';
import {ProduitDto} from './Produit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DemandeItemDto  extends BaseDto{

    public id: number;
    public prix: number;
    public quantite: number;
    public prixMax: string ;
    public prixMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public produit: ProduitDto ;
    public demande: DemandeDto ;

}
