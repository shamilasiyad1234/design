import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import{data} from 'src/assets/data';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-artformpage',
  templateUrl: './artformpage.component.html',
  styleUrls: ['./artformpage.component.css']
})
export class ArtformpageComponent {
  
    artform=data
    constructor(private router: Router,private hero:HeroService) {  }
    artformpage=this .hero.giveData();
    
  gotoHere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single']);
  }
  }

