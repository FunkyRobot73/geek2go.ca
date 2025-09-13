import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({

    "fName" : "Carlito",
    "lName" : "Sousa",
    "company": "Funky Robot",
    "event": "",
    "newDate": "",
    "newEmail" : "carlos@funky.ca",
    "newPhone": "416-832-3546",
    "newVenueName": "Carmens",
    "newAddress": "690 Francis Rd.",
    "newVenueCity": "Burlington",
    "newIndoor": "Indoor",
    "newService": "3-Hour Photo Booth (Gold Package)",
    "newTimeStart": "",
    "newTimeEnd": "",
    "newStatus": "",
    "newPayment": 200,
    "newBalance": 995,
    "newDetails01": "",
    "newDetails02": "",
    "newDetails03": "",
    "newDetails04": "",
    "newNote": "Let me know if you have any questions or comments",
    "newQuoteOrInvoice": "Invoice",
    "newCost": 995,
    "newQuoteId": "",

  })
}

@Injectable({
  providedIn: 'root'
})
export class AddeventService {

  constructor() { }

  private apiUrl01 = "https://back.funkyrobot.ca/customer2";
  private apiUrl02 = "https://back.funkyrobot.ca/addcustomers2";
  private apiUrl03 = "https://back.funkyrobot.ca/djpackages";

  http = inject(HttpClient);

  getCustomers() {
    return this.http.get<any>(this.apiUrl01).pipe(catchError(this.handleError));
  }

  getDJPackages() {
    return this.http.get<any>(this.apiUrl03).pipe(catchError(this.handleError));
  }

  private handleError(error: any){
    console.log(error);
    return throwError(()=> new Error(`Something went poop!`));
  }

  createCustomer(post: any) {
    return this.http.post(this.apiUrl02, post, httpOptions);
  }

  
}
