import {AchatDto} from './Achat.model';
import {ProduitDto} from './Produit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AchatItemDto  extends BaseDto{

    public id: number;
    public prixUnitaire: number;
    public prixVente: number;
    public quantite: number;
    public quantiteAvoir: number;
    public remise: number;
    public prixUnitaireMax: string ;
    public prixUnitaireMin: string ;
    public prixVenteMax: string ;
    public prixVenteMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public quantiteAvoirMax: string ;
    public quantiteAvoirMin: string ;
    public remiseMax: string ;
    public remiseMin: string ;
    public produit: ProduitDto ;
    public achat: AchatDto ;

}
