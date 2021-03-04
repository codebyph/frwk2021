import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ["userid", "id", "title", "body"];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  totalRows!: number;
  pageSize: any = 5;
  pageIndex: any = 1;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this._productService
      .trazerProdutos(this.pageIndex, this.pageSize)
      .subscribe((res) => {
        this.dataSource = res;
      });
    this._productService.trazerProdutosLength().subscribe((res) => {
      this.totalRows = res.length;
    });
  }

  proximaPagina() {
    this.pageSize = this.paginator.pageSize;
    this.pageIndex = this.paginator.pageIndex + 1;
    this.getProdutos();
  }
}
