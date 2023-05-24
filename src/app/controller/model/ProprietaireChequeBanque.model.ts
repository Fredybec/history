import {ProprietaireChequeDto} from './ProprietaireCheque.model';
import {BanqueDto} from './Banque.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProprietaireChequeBanqueDto  extends BaseDto{

    public id: number;
    public proprietaireCheque: ProprietaireChequeDto ;
    public banque: BanqueDto ;

}
