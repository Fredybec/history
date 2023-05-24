import {AvoirAchatDto} from './AvoirAchat.model';
import {ProduitDto} from './Produit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AvoirAchatItemDto  extends BaseDto{

    public id: number;
    public montant: number;
    public quantite: number;
    public montantMax: string ;
    public montantMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public produit: ProduitDto ;
    public avoirAchat: AvoirAchatDto ;

}
