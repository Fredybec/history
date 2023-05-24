import {StoreCriteria} from './StoreCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class AbonneCriteria  extends BaseCriteria {

    public id: number;
    public code: string;
    public codeLike: string;
    public adresse: string;
    public adresseLike: string;
    public bloqued: null | boolean;
    public dateCreation: Date;
    public dateCreationFrom: Date;
    public dateCreationTo: Date;
    public email: string;
    public emailLike: string;
    public tel: string;
    public telLike: string;
    public logo: string;
    public logoLike: string;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public nomSociete: string;
    public nomSocieteLike: string;
    public pathBackUp: string;
    public pathBackUpLike: string;
    public patente: string;
    public patenteLike: string;
    public rc: string;
    public rcLike: string;
    public cnss: string;
    public cnssLike: string;
    public ifisc: string;
    public ifiscLike: string;
    public ice: string;
    public iceLike: string;
      public stores: Array<StoreCriteria>;

}
