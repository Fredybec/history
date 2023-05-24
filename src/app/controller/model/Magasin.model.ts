import {StoreDto} from './Store.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class MagasinDto  extends BaseDto{

    public id: number;
    public nom: string;
    public adresse: string;
    public store: StoreDto ;

}
