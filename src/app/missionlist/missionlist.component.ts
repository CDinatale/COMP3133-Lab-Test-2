import { Component, OnInit } from '@angular/core';
import { Mission } from '../model/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];

  constructor(private spacexapiService: SpacexapiService) { }

  ngOnInit(): void {
    this.spacexapiService.getMissions()
      .subscribe((data: any[]) => this.missions = data);
  }

}
