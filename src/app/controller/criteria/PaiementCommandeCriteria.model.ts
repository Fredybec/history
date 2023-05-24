import {CommandeCriteria} from './CommandeCriteria.model';
import {ModePaiementCriteria} from './ModePaiementCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class PaiementCommandeCriteria  extends BaseCriteria {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public datePaiement: Date;
    public datePaiementFrom: Date;
    public datePaiementTo: Date;
     public montant: number;
     public montantMin: number;
     public montantMax: number;
    public description: string;
    public descriptionLike: string;
  public commande: CommandeCriteria ;
  public modePaiement: ModePaiementCriteria ;

}
