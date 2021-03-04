import { AlbumsService } from "./../../services/albums.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-album-crud",
  templateUrl: "./album-crud.component.html",
  styleUrls: ["./album-crud.component.css"],
})
export class AlbumCrudComponent implements OnInit {
  dataSource: any;
  displayedColumns = ["userid", "id", "title"];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  totalRows!: number;
  pageSize: any = 5;
  pageIndex: any = 1;

  constructor(private _albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.getAlbuns();
  }

  getAlbuns() {
    this._albumsService
      .trazerAlbuns(this.pageIndex, this.pageSize)
      .subscribe((res) => {
        this.dataSource = res;
      });

    this._albumsService.trazerAlbunsLength().subscribe((res) => {
      this.totalRows = res.length;
    });
  }

  proximaPagina() {
    this.pageSize = this.paginator.pageSize;
    this.pageIndex = this.paginator.pageIndex + 1;
    this.getAlbuns();
  }
}
