import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivraisonService } from 'src/app/shared/livraison.service';

@Component({
  selector: 'mtm-details-liv',
  templateUrl: './details-liv.component.html',
  styleUrls: ['./details-liv.component.css']
})
export class DetailsLivComponent implements OnInit {

  constructor(private livraisonServ:LivraisonService,private route:ActivatedRoute) { }
  cmdLiv:any[]=[]
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.livraisonServ.oneDelivery(id).subscribe(data=>{
      this.cmdLiv=data.commandes
    })
  }

}
