import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgFor, CommonModule } from '@angular/common';
import { AddeventService } from 'src/app/services/addevent.service';
import { Customer } from 'src/app/interfaces/customer';


@Component({
  selector: 'app-addevent',
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './addevent.component.html',
  styleUrl: './addevent.component.scss'
})
export class AddeventComponent {

  fName : string = "Adele";
  lName : string = "Sousa";
  company: string = "Adele & Jackson";
  event: string = "Wedding";
  newDate: string = new Date().toISOString().split('T')[0]; // Default to today's date in YYYY-MM-DD format
  newDateString: string = this.newDate.toString().split('T')[0]; // Format date as YYYY-MM-DD
  newEmail : string ="adele@funky.ca";
  newPhone: string = "416-832-3546";
  newVenueName: string = "Adeles Place";
  newAddress: string = "backyard";
  newVenueCity: string = "Hamilton";
  newIndoor: string = "Indoor";
  newService: string = "DJ Service";
  newTimeStart: string = "Noon";
  newTimeEnd: string = "Midnight";
  newDetails01: string = "Wedding Package (Cocktails, Dinner & Dancing)";
  newDetails02: string = "High Quality Sound System with Wireless Mic.";
  newDetails03: string = "Sound activated LED & Intelligent Lighting";
  newDetails04: string = "Approx. 100 Guests...  Custom Playlist available";
  newNote: string = "Let me know if you have any questions or comments"
  newQuoteOrInvoice: string = "Quote";
  newStatus: string = "Quote Pending";
  newBalance: number = 0;
  newPayment: number = 0;
  newCost: number = 1000;
  newQuoteId: string = Math.floor(Date.now() / 1000).toString().slice(2,9);
  newPaymentType: string = "Cash"
  newPackage: string = "DJ Service";

  customerService = inject(AddeventService)
  customers2: Customer[] = [];
  djPackages: any[] = [];
  apiUrl01 = "https://back.funkyrobot.ca/customer2";

  constructor() {
    this.loadDJPackes();
   }
  ngOnInit() {
    // Initialize component
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers2 = data;
        console.log(this.customers2);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadDJPackes() {
    this.customerService.getDJPackages().subscribe({
      next: (data) => this.djPackages = data,
      error: (err) => console.error('Error loading companies:', err)
    });
  }

  newQuoteID() {
    this.newQuoteId = Math.floor(Date.now() / 1000).toString().slice(2,9);
  }

  addCustomer() {
    this.customerService.createCustomer({

      fName: this.fName,
      lName: this.lName,
      company: this.company,
      event: this.event,
      dateEvent: this.newDate,
      email:this.newEmail,
      phone: this.newPhone,
      venueName: this.newVenueName,
      venueAddress: this.newAddress,
      venueCity: this.newVenueCity,
      indoor: this.newIndoor,
      service: this.newService,
      timeStart: this.newTimeStart,
      timeEnd: this.newTimeEnd,
      status: this.newStatus,
      payment: this.newPayment,
      balance: this.newBalance,
      details01: this.newDetails01,
      details02: this.newDetails02,
      details03: this.newDetails03,
      details04: this.newDetails04,
      note: this.newNote,
      quoteOrInvoice: this.newQuoteOrInvoice,
      cost: this.newCost,
      quoteId: this.newQuoteId,
      paymentType: this.newPaymentType

}).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      })

  };

}
