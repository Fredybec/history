import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {VenteItemDto} from '../model/VenteItem.model';
import {VenteItemCriteria} from '../criteria/VenteItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {VenteDto} from '../model/Vente.model';
import {ProduitDto} from '../model/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class VenteItemService extends AbstractService<VenteItemDto, VenteItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/venteItem/');
    }

    public constrcutDto(): VenteItemDto {
        return new VenteItemDto();
    }

    public constrcutCriteria(): VenteItemCriteria {
        return new VenteItemCriteria();
    }
}
