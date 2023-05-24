import {MagasinDto} from './Magasin.model';
import {ProduitDto} from './Produit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class StockProduitDto  extends BaseDto{

    public id: number;
    public quantite: number;
    public quantiteDeffecteuse: number;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public quantiteDeffecteuseMax: string ;
    public quantiteDeffecteuseMin: string ;
    public magasin: MagasinDto ;
    public produit: ProduitDto ;

}
