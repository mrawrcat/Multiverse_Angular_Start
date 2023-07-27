import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit{
  selectedDate: Date;
  imageOfTheDay: any;

  constructor(private nasaApiService: NasaApiService){}

  getPictureOfTheDay(){
    const formattedDate = this.formatDate(this.selectedDate);
    this.nasaApiService.getAstronomyPictureOfTheDay(formattedDate).subscribe(
      (data:any) => {
        this.imageOfTheDay = data;
      },
      (error:any) => {
        console.error(error);
      }
    )
  }
  // TODO: Set the date in the datepicker because when init it is blank
  getInitPicture(){
    const TodaysDate = "2023-07-27";
    this.nasaApiService.getAstronomyPictureOfTheDay(TodaysDate).subscribe(
      (data:any) => {
        this.imageOfTheDay = data;
      },
      (error:any) => {
        console.error(error);
      }
    )
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  ngOnInit(): void {
    this.getInitPicture();
  }
}
