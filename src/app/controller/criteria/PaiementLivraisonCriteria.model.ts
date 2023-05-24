import {VenteCriteria} from './VenteCriteria.model';
import {LivraisonCriteria} from './LivraisonCriteria.model';
import {ModePaiementCriteria} from './ModePaiementCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class PaiementLivraisonCriteria  extends BaseCriteria {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public dateLivraison: Date;
    public dateLivraisonFrom: Date;
    public dateLivraisonTo: Date;
     public montant: number;
     public montantMin: number;
     public montantMax: number;
    public description: string;
    public descriptionLike: string;
  public livraison: LivraisonCriteria ;
  public vente: VenteCriteria ;
  public modePaiement: ModePaiementCriteria ;

}
