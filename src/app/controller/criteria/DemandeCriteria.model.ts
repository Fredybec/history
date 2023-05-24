import {MagasinCriteria} from './MagasinCriteria.model';
import {EtatDemandeCriteria} from './EtatDemandeCriteria.model';
import {PaiementDemandeCriteria} from './PaiementDemandeCriteria.model';
import {LivraisonCriteria} from './LivraisonCriteria.model';
import {ClientCriteria} from './ClientCriteria.model';
import {ProduitCriteria} from './ProduitCriteria.model';
import {DemandeItemCriteria} from './DemandeItemCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class DemandeCriteria  extends BaseCriteria {

    public id: number;
  public produit: ProduitCriteria ;
  public client: ClientCriteria ;
  public livraison: LivraisonCriteria ;
  public magasin: MagasinCriteria ;
  public etatDemande: EtatDemandeCriteria ;
      public demandeItems: Array<DemandeItemCriteria>;
      public paiementDemandes: Array<PaiementDemandeCriteria>;

}
