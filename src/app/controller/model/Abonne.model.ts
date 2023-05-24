import {StoreDto} from './Store.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AbonneDto  extends BaseDto{

    public id: number;
    public code: string;
    public adresse: string;
   public bloqued: null | boolean;
   public dateCreation: Date;
    public email: string;
    public tel: string;
    public logo: string;
    public nom: string;
    public prenom: string;
    public nomSociete: string;
    public pathBackUp: string;
    public patente: string;
    public rc: string;
    public cnss: string;
    public ifisc: string;
    public ice: string;
    public dateCreationMax: string ;
    public dateCreationMin: string ;
     public stores: Array<StoreDto>;

}
