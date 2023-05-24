import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AvoirVenteDto} from '../model/AvoirVente.model';
import {AvoirVenteCriteria} from '../criteria/AvoirVenteCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {VenteDto} from '../model/Vente.model';
import {AvoirVenteItemDto} from '../model/AvoirVenteItem.model';

@Injectable({
  providedIn: 'root'
})
export class AvoirVenteService extends AbstractService<AvoirVenteDto, AvoirVenteCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/avoirVente/');
    }

    public constrcutDto(): AvoirVenteDto {
        return new AvoirVenteDto();
    }

    public constrcutCriteria(): AvoirVenteCriteria {
        return new AvoirVenteCriteria();
    }
}
