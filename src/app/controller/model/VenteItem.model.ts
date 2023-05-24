import {VenteDto} from './Vente.model';
import {ProduitDto} from './Produit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class VenteItemDto  extends BaseDto{

    public id: number;
    public prixUnitaire: number;
    public quantite: number;
    public remise: number;
    public quantiteAvoir: number;
    public prixUnitaireMax: string ;
    public prixUnitaireMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public remiseMax: string ;
    public remiseMin: string ;
    public quantiteAvoirMax: string ;
    public quantiteAvoirMin: string ;
    public produit: ProduitDto ;
    public vente: VenteDto ;

}
