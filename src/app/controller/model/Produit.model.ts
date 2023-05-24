import {MarqueDto} from './Marque.model';
import {CategorieProduitDto} from './CategorieProduit.model';
import {StoreDto} from './Store.model';
import {UniteMesureDto} from './UniteMesure.model';
import {StockProduitDto} from './StockProduit.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProduitDto  extends BaseDto{

    public id: number;
    public reference: string;
    public libelle: string;
    public barcode: string;
    public description: string;
    public prixAchatMoyen: number;
    public quantite: number;
    public seuilAlert: number;
    public photoProduits: string;
    public prixAchatMoyenMax: string ;
    public prixAchatMoyenMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public seuilAlertMax: string ;
    public seuilAlertMin: string ;
    public categorieProduit: CategorieProduitDto ;
    public uniteMesure: UniteMesureDto ;
    public marque: MarqueDto ;
    public store: StoreDto ;
     public stockProduits: Array<StockProduitDto>;

}
