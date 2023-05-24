import {StoreCriteria} from './StoreCriteria.model';

import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class MagasinCriteria  extends BaseCriteria {

    public id: number;
    public nom: string;
    public nomLike: string;
    public adresse: string;
    public adresseLike: string;
  public store: StoreCriteria ;

}
