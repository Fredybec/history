import {VenteDto} from './Vente.model';
import {AvoirVenteItemDto} from './AvoirVenteItem.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AvoirVenteDto  extends BaseDto{

    public id: number;
   public dateAvoir: Date;
    public montant: number;
    public dateAvoirMax: string ;
    public dateAvoirMin: string ;
    public montantMax: string ;
    public montantMin: string ;
    public vente: VenteDto ;
     public avoirVenteItems: Array<AvoirVenteItemDto>;

}
