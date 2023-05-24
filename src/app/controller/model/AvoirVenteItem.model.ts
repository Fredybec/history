import {AvoirVenteDto} from './AvoirVente.model';
import {ProduitDto} from './Produit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AvoirVenteItemDto  extends BaseDto{

    public id: number;
    public montantAvoir: number;
    public quantite: number;
    public montantAvoirMax: string ;
    public montantAvoirMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public produit: ProduitDto ;
    public avoirVente: AvoirVenteDto ;

}
