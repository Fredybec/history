import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ClientDto  extends BaseDto{

    public id: number;
    public cin: string;
    public nom: string;
    public tel: string;
    public email: string;
    public adresse: string;
    public description: string;
    public creance: number;
    public creanceMax: string ;
    public creanceMin: string ;

}
