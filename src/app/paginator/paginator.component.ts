import { Component, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output() goPrev=new EventEmitter<boolean>();
  @Output() goNext=new EventEmitter<boolean>();

  constructor() {
    
  }
  ngOnInit(): void {

  }

  onPrev(){
    this.goPrev.emit(true);
  }

  onNext(){
    this.goNext.emit(true);
  }

}
