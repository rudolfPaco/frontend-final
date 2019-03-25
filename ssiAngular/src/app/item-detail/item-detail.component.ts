import {Component, Input, OnInit} from '@angular/core';
import {Equipo} from '../shared/equipo';
import {EquipoService} from '../service/equipo.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input()
  equipo: Equipo;

  constructor(private equipoService: EquipoService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
  }
}
