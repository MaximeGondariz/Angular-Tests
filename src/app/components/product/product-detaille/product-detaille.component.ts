import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detaille',
  templateUrl: './product-detaille.component.html',
  styleUrls: ['./product-detaille.component.scss']
})
export class ProductDetailleComponent implements OnInit {

  productId: any = ''

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.productId = params['id'];

    this.route.params.subscribe((params: any) => {
      this.productId = params['id'];
    });
  }

}
