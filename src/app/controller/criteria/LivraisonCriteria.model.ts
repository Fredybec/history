import {LivraisonItemCriteria} from './LivraisonItemCriteria.model';
import {EtatLivraisonCriteria} from './EtatLivraisonCriteria.model';
import {DemandeCriteria} from './DemandeCriteria.model';
import {ClientCriteria} from './ClientCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class LivraisonCriteria  extends BaseCriteria {

    public id: number;
    public dateLivraison: Date;
    public dateLivraisonFrom: Date;
    public dateLivraisonTo: Date;
  public demande: DemandeCriteria ;
  public etatLivraison: EtatLivraisonCriteria ;
  public client: ClientCriteria ;
      public livraisonItems: Array<LivraisonItemCriteria>;

}
