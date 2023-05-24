import {MagasinDto} from './Magasin.model';
import {ReceptionDto} from './Reception.model';
import {ProduitDto} from './Produit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ReceptionItemDto  extends BaseDto{

    public id: number;
    public quantite: number;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public produit: ProduitDto ;
    public magasin: MagasinDto ;
    public reception: ReceptionDto ;

}
