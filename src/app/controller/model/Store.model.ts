import {AbonneDto} from './Abonne.model';
import {MagasinDto} from './Magasin.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class StoreDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public reference: string;
    public abonne: AbonneDto ;
     public magasins: Array<MagasinDto>;

}
