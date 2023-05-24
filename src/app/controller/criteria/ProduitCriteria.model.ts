import {MarqueCriteria} from './MarqueCriteria.model';
import {CategorieProduitCriteria} from './CategorieProduitCriteria.model';
import {StoreCriteria} from './StoreCriteria.model';
import {UniteMesureCriteria} from './UniteMesureCriteria.model';
import {StockProduitCriteria} from './StockProduitCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ProduitCriteria  extends BaseCriteria {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public libelle: string;
    public libelleLike: string;
    public barcode: string;
    public barcodeLike: string;
    public description: string;
    public descriptionLike: string;
     public prixAchatMoyen: number;
     public prixAchatMoyenMin: number;
     public prixAchatMoyenMax: number;
     public quantite: number;
     public quantiteMin: number;
     public quantiteMax: number;
     public seuilAlert: number;
     public seuilAlertMin: number;
     public seuilAlertMax: number;
    public photoProduits: string;
    public photoProduitsLike: string;
  public categorieProduit: CategorieProduitCriteria ;
  public uniteMesure: UniteMesureCriteria ;
  public marque: MarqueCriteria ;
  public store: StoreCriteria ;
      public stockProduits: Array<StockProduitCriteria>;

}
