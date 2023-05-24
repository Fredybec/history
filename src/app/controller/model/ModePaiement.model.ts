import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ModePaiementDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public code: string;
    public style: string;

}
