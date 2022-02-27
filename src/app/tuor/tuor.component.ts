import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {TourServiceService} from "../service/tour-service.service";

@Component({
  selector: 'app-tuor',
  templateUrl: './tuor.component.html',
  styleUrls: ['./tuor.component.css']
})
export class TuorComponent implements OnInit {

  tours : Tour[] = [];
  tour : Tour = new Tour(0,"",0,"")
  constructor(private tourService : TourServiceService) {
    this.tours = tourService.tours
  }

  ngOnInit(): void {
  }

  create () {
    this.tourService.create(this.tour)
this.deleteData()
  }

  delete (id : number) {
    this.tourService.delete(id)
  }

  showEdit (tour : Tour) {
    this.tour = new Tour(tour.id,tour.name,tour.price,tour.description)
  }

  edit () {
    this.tourService.edit(this.tour);
    this.deleteData()
  }

  deleteData () {
    this.tour = new Tour(0,"",0,"");
  }
}
