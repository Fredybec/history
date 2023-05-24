import {VenteItemDto} from './VenteItem.model';
import {PaiementVenteDto} from './PaiementVente.model';
import {ClientDto} from './Client.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class VenteDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateVente: Date;
    public total: number;
    public totalPaye: number;
    public description: string;
    public dateVenteMax: string ;
    public dateVenteMin: string ;
    public totalMax: string ;
    public totalMin: string ;
    public totalPayeMax: string ;
    public totalPayeMin: string ;
    public client: ClientDto ;
     public paiementVentes: Array<PaiementVenteDto>;
     public venteItems: Array<VenteItemDto>;

}
