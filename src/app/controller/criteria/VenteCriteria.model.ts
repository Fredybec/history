import {VenteItemCriteria} from './VenteItemCriteria.model';
import {PaiementVenteCriteria} from './PaiementVenteCriteria.model';
import {ClientCriteria} from './ClientCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class VenteCriteria  extends BaseCriteria {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public dateVente: Date;
    public dateVenteFrom: Date;
    public dateVenteTo: Date;
     public total: number;
     public totalMin: number;
     public totalMax: number;
     public totalPaye: number;
     public totalPayeMin: number;
     public totalPayeMax: number;
    public description: string;
    public descriptionLike: string;
  public client: ClientCriteria ;
      public paiementVentes: Array<PaiementVenteCriteria>;
      public venteItems: Array<VenteItemCriteria>;

}
