import {VenteCriteria} from './VenteCriteria.model';
import {AvoirVenteItemCriteria} from './AvoirVenteItemCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class AvoirVenteCriteria  extends BaseCriteria {

    public id: number;
    public dateAvoir: Date;
    public dateAvoirFrom: Date;
    public dateAvoirTo: Date;
     public montant: number;
     public montantMin: number;
     public montantMax: number;
  public vente: VenteCriteria ;
      public avoirVenteItems: Array<AvoirVenteItemCriteria>;

}
