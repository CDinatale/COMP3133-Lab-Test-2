import { Component, OnInit, Input } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import {Mission} from '../model/mission';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  mission: Mission | undefined;


  constructor(private route: ActivatedRoute, private spacexapiService: SpacexapiService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.spacexapiService.getMissionById(id)
      .subscribe((data: any) => this.mission = data);
  }

}
