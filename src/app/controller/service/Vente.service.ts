import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {VenteDto} from '../model/Vente.model';
import {VenteCriteria} from '../criteria/VenteCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {VenteItemDto} from '../model/VenteItem.model';
import {PaiementVenteDto} from '../model/PaiementVente.model';
import {ClientDto} from '../model/Client.model';

@Injectable({
  providedIn: 'root'
})
export class VenteService extends AbstractService<VenteDto, VenteCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/vente/');
    }

    public constrcutDto(): VenteDto {
        return new VenteDto();
    }

    public constrcutCriteria(): VenteCriteria {
        return new VenteCriteria();
    }
}
