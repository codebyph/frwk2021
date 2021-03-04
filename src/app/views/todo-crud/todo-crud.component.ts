import { MatPaginator } from "@angular/material/paginator";
import { TodoService } from "./../../services/todo.service";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-todo-crud",
  templateUrl: "./todo-crud.component.html",
  styleUrls: ["./todo-crud.component.css"],
})
export class TodoCrudComponent implements OnInit {
  dataSource: any;
  filtro: any = "todas";
  displayedColumns: string[] = ["userid", "id", "title", "completed"];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  totalRows!: number;
  pageSize: any = 5;
  pageIndex: any = 1;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas() {
    this._todoService
      .trazerTarefas(this.filtro, this.pageIndex, this.pageSize)
      .subscribe((res) => {
        this.dataSource = res;
        console.log(this.dataSource);
      });

    this._todoService.trazerTodasAsTarefas(this.filtro).subscribe((res) => {
      this.totalRows = res.length;
    });
  }

  proximaPagina() {
    this.pageSize = this.paginator.pageSize;
    this.pageIndex = this.paginator.pageIndex + 1;
    this.getTarefas();
  }
}
