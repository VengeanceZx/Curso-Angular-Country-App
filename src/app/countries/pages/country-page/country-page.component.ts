import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

import { switchMap} from 'rxjs'
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country? : Country;

  constructor( 
    private activitedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
    ){}

  ngOnInit(): void {
    //* this.activitedRoute.params
    //* .subscribe( ({id}) => {
      
    //*   this.countriesService.searchCountryAlphaCode(id)
    //*   .subscribe( country => {
    //*     console.log({country});
        
    //*   })
    //* })

    this.activitedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryAlphaCode(id) )
    )
    .subscribe( (country)=> { 
      if (!country) return this.router.navigateByUrl('');
      return this.country = country;
      // return;
    });
  }

}
